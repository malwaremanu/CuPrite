<template>
  <div>
    <div v-show="!loaded">
      <div v-show="!error" class="uppercase font-semibold text-center mx-auto mt-10">
        Please Wait. We are loading the purchase order
        <center>
          <img src="~/assets/Loading_2.gif" />
        </center>
      </div>

      <div class="text-center mt-10 font-semibold" v-show="error">
        <nuxt-link to="/purchase" class="font-semibold underline border rounded-md p-1">
          Go Back
        </nuxt-link>
        <br />
        <br />
        {{ err_msg }}
        <br />
        <br />
        <nuxt-link to="/login" class="font-semibold underline border rounded-md p-1">
          Login Page
        </nuxt-link>
      </div>
    </div>


    <div v-show="loaded" class="p-2 relative min-h-screen uppercase">
      <div>
        <img class="w-full mb-4" src="~/assets/header.png" alt="" />
      </div>
      
      <div class="font-semibold">
        <div class="flex items-center justify-between">
          <div class="w-1/3 p-3">
            <img class="min-w-[50px] max-w-[150px]" v-show="data[0].company == 'SEMHKAT'" src="~/assets/Semhkat.png" />
            <img v-show="data[0].company == 'SURYAMINES'" src="~/assets/Suryamines.png" />
          </div>
          <div class="text-right">
            <div>Date :
              <span v-text="data[0].date"></span>
            </div>
            <div class="text-2xl text-yellow-700 font-semibold">
              {{ data[0].type }} Order
            </div>
            <div class="text-red-600 font-semibold text-2xl uppercase px-2">
              {{ data[0].company.slice(0, 2) }}/<span v-text="show_date(data[0].date)"></span>/{{ data[0].id }}
            </div>
          </div>
        </div>

        <div class="flex justify-between">
          <div v-show="data[0].company == 'SEMHKAT'">
            <span class="text-xs uppercase"> From </span>

            <div class="text-semibold text-lg uppercase">Semhkat Sarl</div>
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

          <div v-show="data[0].company == 'SURYAMINES'">
            <span class="text-xs uppercase"> From </span>
            <div class="text-semibold text-lg uppercase">
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

        <div class="flex justify-end gap-3 hidden">
          <div class="text-center border flex items-center">
            <div class="rounded-md px-2">DISCOUNT</div>
            <div class="py-0.5 px-3">{{ data[0].discount_type }}</div>
          </div>
          <div class="text-center border flex items-center">
            <div class="rounded-md px-2">TVA %</div>
            <div class="p-1 px-3">{{ data[0].tva_rate }}</div>
          </div>
        </div>

        <table class="w-full text-sm mt-2">
          <tr class="border">
            <td class="bg-yellow-500 p-1 text-white text-left text-sm" v-for="a in list_headers()" :key="a">
              {{ a }}
            </td>
          </tr>
          <tr v-for="(value, key) in data[0]['products']" :key="key"
            class="text-left border bg-white uppercase text-gray-900">
            <td class="text-left pl-2">{{ key + 1 }}.</td>
            <td>
              {{ value.part_no }}
            </td>
            <td>{{ value.desc }}</td>
            <td>
              {{ value.qty }} 
              <span v-show="value.unit != 'OTHER'" class="lowercase"> {{ value.unit }} </span>
            </td>
            <td v-show="data[0].discount_type == 'individual'">
              {{ value.discount }}
            </td>
            <td>{{ value.base_price }}</td>
            <td>{{ value.total_amount }}</td>
          </tr>
        </table>

        <div class="flex items-center justify-between">
          <div class="mt-14 p-4">
            <div v-show="this.data[0].company == 'Semhkat'" class="text-left">
              FOR SEMHKAT SARL
            </div>
            <div v-show="this.data[0].company == 'Suryamines'" class="text-left">
              FOR SURYAMINES SARL
            </div>

            <div class="flex justify-end">
              <img src="~/assets/sign.png" class="h-12" />
            </div>

            <div class="text-right">Authorised Signatory</div>
          </div>

          <div>
            <table class="p-3 bg-white text-gray-900">
              <tr class="border font-semibold">
                <td colspan="4" class="text-right p-1 uppercase">AMOUNT</td>
                <td class="text-lg">$ {{ data[0].total_amount }}</td>
              </tr>
              <tr class="border font-semibold" v-show="data[0].tva_rate >= 0.0001">
                <td colspan="4" class="text-right p-1 uppercase">
                  TVA {{ data[0].tva_rate }}%
                </td>
                <td class="text-lg">$ {{ data[0].tva_amount }}</td>
              </tr>

              <tr class="border font-semibold" v-show="data[0].discount_type != 'individual'">
                <td colspan="4" class="text-right p-1 uppercase">Remise</td>
                <td class="text-lg">$ {{ data[0].discount }}</td>
              </tr>

              <tr class="border font-semibold">
                <td colspan="4" class="text-right p-1 uppercase">
                  Grand Total
                </td>
                <td class="text-lg">$ {{ data[0].gross_total }}</td>
              </tr>
            </table>
          </div>
        </div>

        <div v-show="data[0].remark.length >= 1"
          class="mt-3 text-left lowercase p-2 text-gray-400 text-xs bg-gray-100 rounded">
          {{ data[0].remark }}
        </div>
      </div> 
     

      <img v-show="data[0].company == 'SEMHKAT'" class="w-full absolute bottom-0" src="~/assets/footerSemhkat.png"
        alt="" />

      <img v-show="data[0].company == 'SURYAMINES'" class="w-full absolute bottom-0" src="~/assets/footerSuryamines.png"
        alt="" />

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
          "company": "SEMHKAT",
          "address_1": null,
          "total_amount": 12280.33,
          "nif_id": null,
          "rccm_id": null,
          "from": null,
          "tva_rate": "16%",
          "discount_type": "flat",
          "quote_ref": "--",
          "fax": null,
          "address_2": null,
          "website": null,
          "date": "20-10-2022",
          "discount": 0,
          "status": null,
          "email": null,
          "tel": null,
          "tva_amount": "1,964.85",
          "party": "SERVICES MACHINERY TRUCKS",
          "remark": "",
          "__updatedtime__": 1666784428443,
          "id": 643,
          "gross_total": "14,245.18",
          "type": "PURCHASE",
          "flat_discount_type": "value",
          "quote_ref_date": 0,
          "__createdtime__": 1666784428443,
          "products": [{ "__updatedtime__": 1666718990260, "__createdtime__": 1666718990260, "desc": "PO AGAINST THE QUOTATION 20017818", "order_no": null, "id": "127e6957-4fb9-4572-a99a-f215acd93f1c", "discount": null, "po_no": 643, "total_amount": 12280.33, "flw_date": null, "comments": null, "base_price": 12280.33, "net_amount": null, "part_no": null, "unit": "OTHER", "product_number": null, "qty": 1, "rcd_date": null, "date": "20/10/2022", "status": null }]
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
    list_headers() {
      return this.data[0]['discount_type'] == 'individual'
        ? [
          'S.NO.',
          'PART NO.',
          'DESCRIPTION',
          'QTY & UNIT',
          'DISCOUNT',
          'BASE PRICE',
          'NET AMOUNT',
        ]
        : [
          'S.NO.',
          'PART NO.',
          'DESCRIPTION',
          'QTY & UNIT',
          'BASE PRICE',
          'NET AMOUNT',
        ]
    },
    show_date(xtr){
      console.log(xtr)
      var dd = xtr.split('-')
      var year = ''
      for(var d in dd){
        console.log(d, dd[d])
        if(dd[d].length == 4){
          year = dd[d]
        }
      }
      return year.slice(2)
    },
    async fetch_po() {
      // 'SM/" + this.$route.params.id + "'
      // sessionStorage.getItem("operation_token")
      // this.data = await()
    },

    async get_po_details() {
      console.clear()
      const self = this
      try {
        const response = await self.napi(
          '/purchase/' + this.$route.params.id,
          {},
          'GET'
        )
        console.log('response-data', response.data)

        self.data = [ response.data ]
        // this.products = response.data.products
        // this.party = response.data.party
        self.loaded = true
        console.log("all good so far...")
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
