<template>
  <div>
    <!-- <div v-show="!loaded">
      <div v-show="!error" class="uppercase font-semibold text-center mx-auto mt-10">
        Please Wait. We are loading the purchase order 
        <center>
        <img
          src="~/assets/Loading_2.gif"
        />  
        </center>        
      </div>

      <div class="text-center mt-10 font-semibold" v-show="error">
          <nuxt-link to="/purchase" class="font-semibold underline border rounded-md p-1">
            Go Back
          </nuxt-link> <br /> <br />          
          {{ err_msg }}
          <br /> <br />
          <nuxt-link to="/login" class="font-semibold underline border rounded-md p-1"> Login Page </nuxt-link>
      </div>
    </div>
    
    v-show="loaded"
     -->
    <div class="p-2 relative min-h-screen">
      {{ data }}

      <div>
        <img class="w-full mb-4" src="~/assets/header.png" alt="" />
      </div>
      <div class="">
        <div class="flex items-center justify-between">
          <div class="w-1/3">
            <img
              class="min-w-[50px] max-w-[150px]"
              v-show="data[0].company == 'Semhkat'"
              src="~/assets/Semhkat.png"
            />
            <img
              v-show="data[0].company == 'Suryamines'"
              src="~/assets/Suryamines.png"
            />
          </div>
          <div class="text-right">
            <div>Date : {{ data[0].date }}</div>
            <div class="text-2xl text-yellow-700 font-semibold">
              {{ data[0].type }} Order
            </div>
            <div class="text-yellow-900 font-semibold text-xl">
              # {{ data[0].id }}
            </div>
          </div>
        </div>

        <div class="flex justify-between">
          <div v-show="data[0].company == 'Semhkat'">
            <span class="text-xs uppercase"> From </span>

            <div class="text-semibold text-lg">Semhkat Sarl</div>
            <div class="text-sm">
              506, Avenue Abbé Kahozi, <br />
              Commune Lubumbashi, ville <br />
              Lubumbashi, province Haut Katanga DRC. <br />
              <span class="text-xs">
                NIF: A1908132L. , ID NAT: 05-B0500-N50752C. <br />
                RCCM: CD/LSH/RCCM/13-B-01130 <br />
                purchase@Semhkat.com
              </span>
            </div>
          </div>

          <div v-show="data[0].company == 'Suryamines'">
            <span class="text-xs uppercase"> From </span>
            <div class="text-semibold text-lg">
              {{ data[0].company }}
            </div>
            <div class="text-sm">
              <br />
              some address <br />
              some more details <br />
            </div>
          </div>

          <div></div>

          <div class="text-right">
            <span class="text-xs uppercase"> TO </span>

            <div class="text-semibold text-lg">
              {{ data[0].party }}
            </div>
            <div class="text-sm">
              <br />
              2143,Blvd Lumumba/kimbangu, RDC <br />
              spares-lshi@pan-mo.com <br />
            </div>
          </div>
        </div>

        <div class="flex justify-end gap-3">
          <div class="text-center border flex items-center">
            <div class="rounded-md px-2">DISCOUNT</div>
            <div class="py-0.5 px-3">{{ data[0].DISCOUNT }}</div>
          </div>
          <div class="text-center border flex items-center">
            <div class="rounded-md px-2">TVA</div>
            <div class="p-1 px-3">{{ data[0].TVA }}</div>
          </div>
        </div>

        <table class="w-full text-sm mt-1">
          <tr class="border">
            <td
              class="bg-yellow-600 p-1 text-white text-left text-sm"
              v-for="a in [
                'S.NO.',
                'PART NO.',
                'DESCRIPTION',
                'QTY',
                'BASE PRICE',
                'NET AMOUNT',
              ]"
              :key="a"
            >
              {{ a }}
            </td>
          </tr>
          <tr
            v-for="(value, key) in data[0]['products']"
            :key="key"
            class="text-left border bg-white"
          >
            <td class="text-left pl-2">{{ key + 1 }}.</td>
            <td>
              {{ value.part_no }}
            </td>
            <td>
              {{ value.desc }}
            </td>
            <td>{{ value.qty }}</td>
            <td>{{ value.base_price }}</td>
            <td>{{ value.total_amount }}</td>
          </tr>
        </table>

        <div class="flex items-center justify-between">
          <div class="mt-14 p-4">
            <div v-show="this.data[0].company == 'Semhkat'" class="text-left">
              FOR SEMHKAT SARL
            </div>
            <div
              v-show="this.data[0].company == 'Suryamines'"
              class="text-left"
            >
              FOR SURYAMINES SARL
            </div>

            <div class="flex justify-end">
              <img src="~/assets/sign.png" class="h-12" />
            </div>

            <div class="text-right">Authorised Signatory</div>
          </div>

          <div>
            <table class="p-3">
              <tr class="border font-semibold">
                <td colspan="4" class="text-right p-1 uppercase">AMOUNT</td>
                <td class="text-lg">$ {{ data[0].AMOUNT }}</td>
              </tr>
              <tr class="border font-semibold">
                <td colspan="4" class="text-right p-1 uppercase">TVA</td>
                <td class="text-lg">$ {{ data[0].TVA_AMOUNT }}</td>
              </tr>

              <tr class="border font-semibold">
                <td colspan="4" class="text-right p-1 uppercase">Remise</td>
                <td class="text-lg">$ {{ data[0].DISCOUNT }}</td>
              </tr>

              <tr class="border font-semibold">
                <td colspan="4" class="text-right p-1 uppercase">
                  Grand Total
                </td>
                <td class="text-lg">$ {{ data[0].GROSS_AMOUNT }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <img
        v-show="this.data[0].FROM == 'SEMHKAT'"
        class="w-full absolute bottom-0"
        src="~/assets/footerSemhkat.png"
        alt=""
      />

      <img
        v-show="this.data[0].FROM == 'SURYAMINES'"
        class="w-full absolute bottom-0"
        src="~/assets/footerSuryamines.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      data: [
        {
          FROM: '',
        },
      ],
      products: '',
      party: '',
      loaded: false,
      error: false,
      err_msg: '',
    }
  },
  mounted() {
    this.get_po_details()
  },
  methods: {
    async fetch_po() {
      // 'SM/" + this.$route.params.id + "'
      // sessionStorage.getItem("operation_token")
      // this.data = await()
    },

    async get_po_details() {
      const self = this
      try {
        const response = await self.napi(
          '/purchase/' + this.$route.params.id,
          {},
          'GET'
        )
        console.log(response.data._data)

        self.data = response.data._data
        // this.products = response.data.products
        // this.party = response.data.party
        self.loaded = true

        // error case
        // this.error = true
        // this.err_msg = response.data.msg
      } catch (error) {
        console.error(error)
        this.error = true
        this.err_msg = error
        // alert(error)
      }
    },
  },
}
</script>
