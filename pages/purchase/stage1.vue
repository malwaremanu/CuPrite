<template>
  <div class="min-h-screen select-none">
    <div class="p-2 flex items-center text-primary-600 dark:text-primary-600 dark:bg-gray-800">
      <button class="p-2 text-center">
        <NuxtLink to="/purchase">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </NuxtLink>
      </button>

      <div class="text-primary-600 p-2 dark:text-primary-600 dark:bg-gray-800">
        <div class="text-lg font-semibold">Purchase Order</div>
        <div class="text-xs">Add New</div>
      </div>
    </div>

    <div class="text-primary-600 dark:text-primary-600 dark:bg-gray-800 px-4 min-h-screen">
      <div class="overflow-x-auto">
        <div class="hidden">
          {{ parties }}
        </div>

        <div v-show="loading">
          <Isloading />
        </div>

        <div v-show="!loading">

          <div class="grid-2">
            <div>
              <label>PO Date </label>
              <input type="date" v-model="data.date" />
            </div>

            <div>
              <label>PO Number (Auto) </label>
              <input type="text" v-model="data.id" readonly />
            </div>
          </div>

          <div class="grid-3">
            <div>
              <label>Quote / Reference {{data.quote_ref}} </label>
              <input class="uppercase" type="text" @keyup="$event.target.value = $event.target.value.toUpperCase()" v-model="data.quote_ref" />
            </div>

            <div>
              <label>Quote / Reference Date </label>
              <input type="date" v-model="data.quote_ref_date" :max='new Date().toISOString().split("T")[0]' />
            </div>

            <div>
              <label>TVA Rates</label>
              <select v-model="data.tva_rate">
                <option v-for="c in tva_rates" :key="c.uuid" :value="c.percentage">
                  {{ c.percentage }}
                </option>
              </select>
              <div class="hidden">
                {{ tva_rates }}
              </div>
            </div>
          </div>

          <div class="grid-2">
            <div>
              <label>From </label>
              <select v-model="data.company">
                <option v-for="c in companies" :key="c.title" :value="c.title">
                  {{ c.title }}
                </option>
              </select>

              <div class="hidden">
                {{ companies }}
              </div>
            </div>
            <div>
              <label>Choose Party </label>
              <select v-model="data.party">
                <option v-for="c in parties" :key="c.uuid" :value="c.party">
                  {{ c.party }}
                </option>
              </select>
              <div class="hidden">
                {{ parties }}
              </div>
            </div>
          </div>

          <div class="grid-3">
            <div>
              <label>Discount Type</label>
              <select v-model="data.discount_type">
                <option value="flat">Flat</option>
                <!-- <option value="individual">Individual</option> -->
              </select>
            </div>

            <div v-show="data.discount_type == 'flat'">
              <label>Flat Discount Type
              </label>
              <select v-model="data.flat_discount_type">
                <option value="percentage">Percentage</option>
                <option value="value">Value</option>
              </select>
            </div>

            <div v-show="data.discount_type == 'flat'">
              <label>Flat Discount (Enter {{ data.flat_discount_type }}) </label>
              <input type="number" v-model="data.discount" @keyup="data.flat_discount_type == 'percentage' && parseInt(data.discount) > 99
                  ? (() => {
                      $alert('Percentage can not be more then 99%! Please enter correct Discount Percentage. ')
                      data.discount = 0
                    })()
                  : ''
              " />
            </div>
          </div>

          <div class="grid-1">
            <label>Remarks (if any)</label>
            <input type="text" v-model="data.remark" />
          </div>


          <div class="p-4 flex items-center gap-2">
            <button @click="add(data)" class="button">{{ create }}</button>
            <button class="hidden" @click="test_console(sample_products)">
              Post to console
            </button>
            <button class="hidden">First Part</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Isloading from '~/components/isloading.vue'
var url = process.env.base_url
const axios = require('axios').default

export default {
  data() {
    return {
      loading: false,
      stage: 1,
      addt: 'add',
      parties: {},
      companies: {},
      tva_rates: {},
      // data: {},    // JSON Data
      data: {
        'discount_type': 'flat',
        'flat_discount_type': 'percentage',
        "discount": "",

        "tva_rate": 16,
        "tva_amount" : 0,
        "total_amount": "",
        
        "company": "Suryamines",
        "party": "",
        
        "gross_total": "",
        "type": "Purchase",

        "quote_ref": "some quote",
        "quote_ref_date": "",

        "date": "2022-09-07",        
                
        "remark": "some remark",
      },
      create: 'Add Products Now',
      ref_data: {
        id: 100,
        date: '',
        discount: '',
        from: 'suryamines',
        gross_total: '',
        party: null,
        quote_ref: '',
        quote_ref_date: '',
        remark: '',
        total_amount: '',
        tva_amount: '',
        tva_rate: '',
        type: 'purchase',
        __createdtime__: 1662989993547,
        __updatedtime__: 1662990610895,
      },
    }
  },
  mounted: function () {
    this.get_data() //method1 will execute at pageload
  },
  methods: {
    test_console(x) {
      console.clear()
      console.log(this.data)
      console.log(x)
    },
    async get_data() {
      let self = this
      self.loading = true
      var r = await self.napi('/purchase/boot/', {})
      console.log('this is', r.data._data)
      self.parties = r.data._data.parties
      self.companies = r.data._data.companies
      self.tva_rates = r.data._data.tva
      self.loading = false
      // axios
      //   .post(self.$store.state.api_url + '/purchase/boot')
      //   .then(function (response) {
      //     // self.parties = self.$de(response.data.data.parties)
      //     // self.companies = self.$de(response.data.data.companies)
      //     // self.tva_rates = self.$de(response.data.data.tva_rates)
      //     self.loading = false
      //     // if (self.$de(response.data.data).length == 0) {
      //     //     alert('Please Add Parties/Companies First.')
      //     //     self.$router.push('../')
      //     // }
      //     // else {
      //     //     self.data = self.$de(response.data.data)
      //     // }
      //     // console.log(self.data)
      //     // self.loading = false
      //   })
    },
    async add(x) {
      this.create = 'Adding...'
      var r = await this.napi('/purchase/init/', this.data)
      console.log('Posted Init Data : ', r.data.message)      
      if(r.data.message == "inserted 1 of 1 records"){
        this.$router.push('/purchase/stage2?q=' + r.data.inserted_hashes[0])
      }
      // 
    },
  },
  components: { Isloading },
}
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
