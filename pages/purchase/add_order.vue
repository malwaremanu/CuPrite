<template>
  <div class="min-h-screen select-none">
    <div
      class="p-2 flex items-center text-primary-600 dark:text-primary-600 dark:bg-gray-800"
    >
      <button class="p-2 text-center">
        <NuxtLink to="/purchase">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </NuxtLink>
      </button>

      <div class="text-primary-600 p-2 dark:text-primary-600 dark:bg-gray-800">
        <div class="text-lg font-semibold">Purchase Order</div>
        <div class="text-xs">Add New</div>
      </div>
    </div>

    <div
      class="text-primary-600 dark:text-primary-600 dark:bg-gray-800 px-4 min-h-screen"
    >
      <div class="overflow-x-auto">
        <div class="hidden">
          {{ parties }}
        </div>

        <div v-show="loading">
          <Isloading />
        </div>

        <div v-show="!loading">
          <div v-show="stage == 1">
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
                <label>Quote / Reference quote_ref </label>
                <input type="text" v-model="data.quote_ref" />
              </div>

              <div>
                <label>Quote / Reference Date </label>
                <input type="date" v-model="data.quote_ref_date" />
              </div>

              <div>
                <label>TVA Rates</label>
                <select v-model="data.tva">
                  <option
                    v-for="c in tva_rates"
                    :key="c.uuid"
                    :value="c.percentage"
                  >
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
                <select v-model="data.c">
                  <option v-for="c in companies" :key="c.uuid" :value="c.uuid">
                    {{ c.title }}
                  </option>
                </select>

                <div class="hidden">
                  {{ companies }}
                </div>
              </div>
              <div>
                <label>Choose Party </label>
                <select v-model="data.p">
                  <option v-for="c in parties" :key="c.uuid" :value="c.uuid">
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
                <label>Discount Type ({{ data.discount_type }}) </label>
                <select v-model="data.discount_type">
                  <option value="flat">Flat</option>
                  <option value="individual">Individual</option>
                </select>
              </div>

              <div v-show="data.discount_type == 'flat'">
                <label
                  >Flat Discount Type ({{ data.flat_discount_type }})
                </label>
                <select v-model="data.flat_discount_type">
                  <option value="percentage">Percentage</option>
                  <option value="value">Value</option>
                </select>
              </div>

              <div v-show="data.flat_discount_type">
                <label>Flat Discount ({{ data.flat_discount_type }}) </label>
                <input
                  type="number"
                  v-model="data.discount"
                  @keyup="
                    data.flat_discount_type == 'percentage' &&
                    parseInt(data.discount) > 99
                      ? (() => {
                          $alert('Percentage can not be more then 99')
                          data.discount = 0
                        })()
                      : ''
                  "
                />
              </div>
            </div>
          </div>

          <div v-show="stage == 2">
            <div class="overflow-x-auto relative">
              <table>
                <thead>
                  <tr>
                    <th>Part Number</th>
                    <th>Description*</th>
                    <th>QTY* & Unit</th>
                    <th>Base Price*</th>
                    <th>Net Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(p, key) in sample_products"
                    :key="p.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <input
                        type="text"
                        @keyup="
                          $event.target.value =
                            $event.target.value.toUpperCase()
                        "
                        value="asd"
                        v-model="p.product_number"
                      />
                      <span class="text-xs hidden" v-text="uuidv4()"></span>
                    </th>
                    <td>
                      <input
                        type="textarea"
                        @keyup="
                          $event.target.value =
                            $event.target.value.toUpperCase()
                        "
                        v-model="p.desc"
                      />
                      <span v-show="!p.desc" class="text-red-700 text-xs">
                        required
                      </span>
                    </td>
                    <td>
                      <div class="grid-2">
                        <div>
                          <input
                            type="number"
                            class="appearance-none"
                            @keyup="
                              p.total_amount = (
                                parseFloat(p.base_price) * parseFloat(p.qty)
                              ).toFixed(2)
                            "
                            @keydown="
                              p.total_amount = (
                                parseFloat(p.base_price) * parseFloat(p.qty)
                              ).toFixed(2)
                            "
                            v-model="p.qty"
                          />
                          <span v-show="!p.qty" class="text-red-700 text-xs">
                            required
                          </span>
                        </div>

                        <div>
                          <select v-model="p.unit">
                            <option value="Kg">Kg</option>
                            <option value="Nos">Nos</option>
                            <option value="Litres">Litres</option>
                            <option value="Barrel">Barrel</option>
                            <option value="Can">Can</option>
                            <option value="OTHER">OTHER</option>
                          </select>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        class="appearance-none"
                        @keyup="
                          p.total_amount = (
                            parseFloat(p.base_price) * parseFloat(p.qty)
                          ).toFixed(2)
                        "
                        @keydown="
                          p.total_amount = (
                            parseFloat(p.base_price) * parseFloat(p.qty)
                          ).toFixed(2)
                        "
                        v-model="p.base_price"
                      />
                      <span v-show="!p.base_price" class="text-red-700 text-xs">
                        required
                      </span>
                    </td>
                    <td>
                      <span
                        class="text-lg text-primary-700 dark:text-gray-50"
                        v-text="parseFloat(p.total_amount).toFixed(2)"
                      ></span>
                    </td>
                    <td>
                      <div
                        v-show="sample_products.length - 1 == key"
                        class="flex items-center gap-2"
                      >
                        <button
                          class="small-button"
                          @click="add_new_product"
                          v-show="
                            p.total_amount != NaN &&
                            p.total_amount >= 1 &&
                            p.desc
                          "
                        >
                          <svg
                            class="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                          </svg>
                          Add
                        </button>
                        <button
                          v-show="key != 0"
                          class="small-button"
                          @click="delete_product"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr class="p-3 py-5">
                    <td class="text-lg py-5">
                      Product(s) : {{ sample_products.length }}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-2xl text-primary-700 font-semibold">
                      <span v-if="sample_products.length == 1">
                        {{
                          parseFloat(sample_products[0].total_amount).toFixed(2)
                        }}
                      </span>
                      <span v-if="sample_products.length >= 2">
                        {{
                          sample_products
                            .reduce(
                              (a, b) =>
                                parseFloat(a.total_amount) +
                                parseFloat(b.total_amount)
                            )
                            .toFixed(2)
                        }}
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr class="p-3 py-5" v-show="parseFloat(data.tva) > 0">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-lg py-5">TVA {{ data.tva }}%</td>
                    <td class="text-xl text-primary-700 font-semibold">
                      <span v-if="sample_products.length == 1">
                        {{
                          (
                            parseFloat(sample_products[0].total_amount).toFixed(
                              2
                            ) *
                            (parseInt(data.tva) == 0
                              ? 1
                              : (parseInt(data.tva) / 100).toFixed(2))
                          ).toFixed(2)
                        }}
                      </span>
                      <span v-if="sample_products.length >= 2">
                        {{
                          (
                            sample_products
                              .reduce(
                                (a, b) =>
                                  parseFloat(a.total_amount) +
                                  parseFloat(b.total_amount)
                              )
                              .toFixed(2) *
                            (parseInt(data.tva) == 0
                              ? 1
                              : (parseInt(data.tva) / 100).toFixed(2))
                          ).toFixed(2)
                        }}
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr class="p-3 py-5">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-lg py-5">Discount</td>
                    <td class="text-xl text-primary-700 font-semibold">
                      <span v-if="sample_products.length == 1">
                        {{ data.discount }}
                      </span>
                      <span v-if="sample_products.length >= 2">
                        {{ data.discount }}
                      </span>
                    </td>
                    <td></td>
                  </tr>

                  <tr class="p-3 py-5">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-lg py-5">Gross Amount</td>
                    <td class="text-2xl text-primary-700 font-semibold">
                      <span v-if="sample_products.length == 1">
                        {{
                          (
                            parseFloat(sample_products[0].total_amount).toFixed(
                              2
                            ) *
                              (parseInt(data.tva) == 0
                                ? 1
                                : (parseInt(data.tva) / 100).toFixed(2)) -
                            parseFloat(data.discount)
                          ).toFixed(2)
                        }}
                      </span>
                      <span v-if="sample_products.length >= 2">
                        {{
                          (
                            sample_products
                              .reduce(
                                (a, b) =>
                                  parseFloat(a.total_amount) +
                                  parseFloat(b.total_amount)
                              )
                              .toFixed(2) *
                              (parseInt(data.tva) == 0
                                ? 1
                                : (parseInt(data.tva) / 100).toFixed(2)) -
                            parseFloat(data.discount)
                          ).toFixed(2)
                        }}
                      </span>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <div>
                {{ data }} <br />
                {{ sample_products }}
              </div>
            </div>
          </div>

          <div class="p-4 flex items-center gap-2">
            <button @click="add(data)" class="button">{{ create }}</button>
            <button class="button" @click="test_console(sample_products)">
              Post to console
            </button>

            <button @click="stage = 1" class="button">First Part</button>
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
      sample_products: [
        {
          id: this.uuidv4(),
          product_number: '',
          qty: '4',
          base_price: '6',
          total_amount: 24.0,
        },
      ],

      addt: 'add',
      parties: {},
      companies: {},
      tva_rates: {},
      // data: {},    // JSON Data
      data: {
        c: '5046f93c-78ff-4e20-bb05-2f937e59b89c',
        tva: 10,
        quote_ref: 'asdasdasd',
        quote_ref_date: '2022-09-02',
        p: '0b83c08e-c84d-45ea-a492-a1d7e988fbdd',
        date: '2022-09-16',
        discount: '',
        discount_type: '',
        flat_discount_type: '',
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

    uuidv4() {
      const d = new Date()
      var aa =
        d.getDay() +
        '' +
        d.getMonth() +
        '' +
        d.getFullYear() +
        '' +
        d.getSeconds() +
        '' +
        d.getMilliseconds()

      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11 + aa).replace(/[018]/g, (c) =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(20)
      )
    },
    add_new_product() {
      console.log('adding new')
      this.sample_products.push({
        id: this.uuidv4(),
        total_amount: 0,
      })
    },

    delete_product() {
      this.sample_products.pop()
    },

    cons(x) {
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
    add(x) {
      this.create = 'Create'
      this.stage = 2
      console.log(x)
    },
    cons(x) {
      console.log(x)
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
