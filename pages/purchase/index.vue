<template>
  <div class="dark:bg-gray-900 bg-gray-50 min-h-screen">
    <Bottombar />

    <div class="flex">
      <Sidebar />

      <div class="w-full my-10">
        <Isloading v-show="is_loading_orders" />
        <table v-show="!is_loading_orders" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="
                  text-xs text-gray-700
                  uppercase
                  bg-gray-50
                  dark:bg-gray-700 dark:text-gray-400
                ">
            <tr>
              <th>PO NUMBER</th>
              <th>SUPPLIER</th>
              <th>PO DATE</th>
              <th>GROSS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id" class="
                    cursor-pointer
                    hover:bg-gray-200
                    dark:hover:bg-gray-600
                    bg-white
                    border-b
                    dark:bg-gray-800 dark:border-gray-700
                  ">
              <th scope="row" class="py-4 px-6">
                <div class="
                        flex
                        items-center
                        justify-between
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        dark:text-white
                      " @click="$router.push('purchase/' + order.id)">
                  {{ order.id }}
                </div>
              </th>
              <td class="py-4 px-6 text-xs">{{ order.party }}</td>
              <td class="py-4 px-6 text-xs">{{ order.date }}</td>
              <td class="py-4 px-6">
                ${{ order.gross_total }}
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center gap-2">
                  <div @click="$router.push('purchase/' + order.id)" class="button">
                    <EyeIcon />
                    View
                  </div>

                  <div class="button">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z">
                      </path>
                    </svg>
                    Print
                  </div>

                </div>


              </td>
            </tr>
          </tbody>
        </table>
        <!-- 
        <div class="hidden">
          <div class="w-full" v-show="order_d">
            <div class="
              overflow-x-auto
              relative
              shadow-md
              rounded-lg
              lg:w-[90%]
              mx-auto
            ">
              <Isloading v-show="is_loading_orders" />
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="
                  text-xs text-gray-700
                  uppercase
                  bg-gray-50
                  dark:bg-gray-700 dark:text-gray-400
                ">
                  <tr>
                    <th>PO NUMBER</th>
                    <th>SUPPLIER</th>
                    <th>PO DATE</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="order in orders" :key="order.id" aatclick="select_order(order)" class="
                    cursor-pointer
                    hover:bg-gray-200
                    dark:hover:bg-gray-600
                    bg-white
                    border-b
                    dark:bg-gray-800 dark:border-gray-700
                  ">
                    <th scope="row" class="py-4 px-6">
                      <div class="
                        flex
                        items-center
                        justify-between
                        font-medium
                        text-gray-900
                        whitespace-nowrap
                        dark:text-white
                      " @click="$router.push('purchase/' + order.PO_NUMBER.split('/')[1])">
                        {{ order.PO_NUMBER }}
                      </div>
                    </th>
                    <td class="py-4 px-6 text-xs">{{ order.SUPPLIER }}</td>
                    <td class="py-4 px-6 text-xs">{{ order.PO_DATE }}</td>
                    <td class="py-4 px-6">

                      <span v-show="order.GROSS_AMOUNT"> ${{ order.GROSS_AMOUNT }} </span>
                    </td>
                    <td class="py-4 px-6">
                      <div class="flex items-center gap-2">
                        <div @click="$router.push('purchase/' + order.PO_NUMBER.split('/')[1])" class="button">
                          <EyeIcon />
                          View
                        </div>

                        <div class="button">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z">
                            </path>
                          </svg>
                          Print
                        </div>

                      </div>


                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="w-full" v-show="!order_d">
            <div>
              <div class="text-xl flex items-center justify-between gap-2 p-2">
                <div class="flex items-center gap-2 dark:text-white">
                  <div class="p-1 cursor-pointer" @click="hide_order">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div>{{ show_po.PO_NUMBER }}</div>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center text-xs uppercase gap-2">
                    <span class="
                      border border-gray-500
                      py-1
                      px-2
                      rounded-full
                      hover:border-gray-50
                      cursor-pointer
                      text-white
                    " @click="print_it(show_po.PO_NUMBER)">Print</span>

                    <span class="
                      border border-gray-500
                      py-1
                      px-2
                      rounded-full
                      hover:border-gray-50
                      cursor-pointer
                    " @click="edit(show_po)" v-show="!to_edit">Edit</span>

                    <span class="
                      border border-gray-500
                      py-1
                      px-2
                      rounded-full
                      hover:border-gray-50
                      cursor-pointer
                    " @click="to_edit = false" v-show="to_edit">Cancel</span>

                    <span class="
                      border border-gray-300
                      py-1
                      bg-black
                      px-2
                      rounded-full
                      hover:border-gray-50
                      cursor-pointer
                    " @click="save_now(edit_po)" v-show="to_edit">Save</span>
                  </div>
                </div>
              </div>
              <div class="overflow-x-auto relative shadow-md rounded-lg lg:w-[90%] mx-auto">
                <div class="p-4 mx-auto" v-show="is_loading_orders">
                  <Isloading />
                </div>
                <div v-show="!is_loading_orders" class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                  <div v-for="(value, key) in show_po" :key="key" class="
                    hidden
                    hover:bg-gray-200
                    dark:hover:bg-gray-600
                    bg-white
                    border-b
                    dark:bg-gray-800 dark:border-gray-700
                  ">
                    <p scope="row" class="
                      font-medium
                      px-4
                      pt-2
                      text-gray-900
                      whitespace-nowrap
                      dark:text-white
                    ">
                      {{ key }}
                    </p>
                    <p class="px-6">
                      <input type="text" :value="value" class="px-4 py-2 bg-gray-700 py-1 text-white"
                        v-show="to_edit" />
                      <span v-show="!to_edit">{{ value }}</span>
                    </p>
                  </div>

                  <hr />

                  <div class="flex items-center w-full">
                    <div class="
                      hover:bg-gray-200
                      w-full
                      dark:hover:bg-gray-600
                      bg-white
                      border-b
                      dark:bg-gray-800 dark:border-gray-700
                    ">
                      <div class="text-white p-2 text-lg">Purchase Order</div>
                      <div class="px-2 pb-2">{{ show_po.PO_NUMBER }}</div>
                    </div>

                    <div class="
                      hover:bg-gray-200
                      w-full
                      dark:hover:bg-gray-600
                      bg-white
                      border-b
                      dark:bg-gray-800 dark:border-gray-700
                    ">
                      <div class="text-white p-2 text-lg">PO Date</div>
                      <div class="px-2 pb-2">{{ show_po.PO_DATE }}</div>
                    </div>
                  </div>

                  <div class="
                    hover:bg-gray-200
                    w-full
                    dark:hover:bg-gray-600
                    bg-white
                    border-b
                    dark:bg-gray-800 dark:border-gray-700
                  ">
                    <div class="text-white p-2 text-lg">Supplier Details</div>
                    <div class="px-2 pb-2">
                      <span class="font-semibold text-white">{{
                      show_po.SUPPLIER
                      }}</span>
                      <br />
                      {{ supplier_details.ADDRESS_1 }}
                      <br />
                      {{ supplier_details.ADDRESS_2 }}
                      <br />
                      {{ supplier_details.EMAIL }}
                    </div>
                  </div>

                  <div class="
                    hover:bg-gray-200
                    w-full
                    dark:hover:bg-gray-600
                    bg-white
                    border-b
                    dark:bg-gray-800 dark:border-gray-700
                  ">
                    <div class="text-white p-2 text-lg">From</div>
                    <div class="px-2 pb-2">
                      <span class="font-semibold text-white">{{
                      show_po.FROM
                      }}</span>
                      <br />1234 <br />113sde <br />awe1d
                    </div>
                  </div>

                  <div class="flex items-center w-full">
                    <div class="
                      hover:bg-gray-200
                      w-full
                      dark:hover:bg-gray-600
                      bg-white
                      border-b
                      dark:bg-gray-800 dark:border-gray-700
                    ">
                      <div class="text-white p-2 text-lg">Discount</div>
                      <div class="px-2 pb-2">{{ show_po.DISCOUNT }}</div>
                    </div>

                    <div class="
                      hover:bg-gray-200
                      w-full
                      dark:hover:bg-gray-600
                      bg-white
                      border-b
                      dark:bg-gray-800 dark:border-gray-700
                    ">
                      <div class="text-white p-2 text-lg">TVA</div>
                      <div class="px-2 pb-2">{{ show_po.TVA }}</div>
                    </div>
                  </div>

                  <div class="overflow-x-auto relative shadow-md rounded-lg mx-auto">
                    <table>
                      <thead>
                        <tr>
                          <th>S. No.</th>
                          <th>PART No.</th>
                          <th>DESC.</th>
                          <th>QTY.</th>
                          <th>DISCOUNT</th>
                          <th>BASE PRICE</th>
                          <th>NET AMOUNT</th>
                          <th>STATUS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="order in order_details" :key="order" class="
                          cursor-pointer
                          text-left
                          hover:bg-gray-400
                          dark:hover:bg-gray-600
                          bg-white
                          border-b
                          dark:bg-gray-800 dark:border-gray-700
                        ">
                          <th scope="row" class="py-4 px-6">
                            <div class="
                              flex
                              items-center
                              justify-between
                              font-medium
                              text-gray-900
                              whitespace-nowrap
                              dark:text-white
                            ">
                              {{ order_details.order }}
                            </div>
                          </th>
                          <td class="py-4 px-6 text-xs">
                            {{ order.PART_NUMBER }}
                          </td>
                          <td class="py-4 px-6 text-xs w-90 TEXT-LEFT">
                            {{ order.DESCRIPTION }}
                          </td>
                          <td class="py-4 px-6 text-xs">{{ order.QUANTITY }}</td>
                          <td class="py-4 px-6 text-xs">{{ order.DISCOUNT }}</td>
                          <td class="py-4 px-6 text-xs">
                            {{ order.BASE_PRICE }}
                          </td>
                          <td class="py-4 px-6 text-xs">
                            {{ order.NET_AMOUNT }}
                          </td>
                          <td class="py-4 px-6 text-xs">
                            {{ order.STATUS }}
                            <br />
                            <small>{{ order.COMMENTS }}</small>
                          </td>
                        </tr>

                        <tr class="
                          hidden
                          cursor-pointer
                          text-left
                          hover:bg-gray-400
                          dark:hover:bg-gray-600
                          bg-white
                          border-b
                          dark:bg-gray-800 dark:border-gray-700
                        ">
                          <td colspan="5"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import Isloading from '../../components/isloading.vue'
import { EyeIcon } from '@vue-hero-icons/outline'
import Bottombar from '~/components/bottombar.vue'
import Sidebar from '../../components/purchase/sidebar.vue'

export default {
  data() {
    return {
      orders: [],
      is_loading_orders: true,
      supplier_details: {},
      order_details: [],
      to_edit: false,
      is_saving: false,
      show_po: {
        DISCOUNT: 'loading',
        TVA: 'loading',
        id: 'loading',
        PO_DATE: 'loading',
        AMOUNT: 'loading',
        __createdtime__: 'loading',
        PO_NUMBER: 'loading',
        TYPE: 'loading',
        __updatedtime__: 'loading',
        TVA_AMOUNT: 'loading',
        SUPPLIER: 'loading',
        FROM: 'loading',
        GROSS_AMOUNT: 'loading',
      },
      order_d: true,
    }
  },
  mounted() {
    console.log(`the component is now mounted.`)
    this.get_data()
    window.scrollTo(0, 0)
  },
  methods: {
    async get_data() {
      let self = this
      // self.orders = [{
      //   PARTY: 'Loading...'
      // }]
      // console.log('url is' + url)
      self.is_loading_orders = true
      var r = await self.napi('/purchase/', {}, "GET")
      console.log(r.data._data)
      self.orders = r.data._data
      self.is_loading_orders = false

      // const axios = require('axios').default
      // axios
      //   .post(self.$store.state.api_url, {
      //     data: self.$en({
      //       operation: 'sql',
      //       sql: 'select * from po.first'
      //     })
      //   })
      //   .then(function (response) {
      //     console.log('this is party data', self.$de(response.data.data))
      //     self.orders = self.$de(response.data.data)
      //     self.is_loading_orders = false
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    },
    print_it(x) {
      console.log(x)
      var y = x.slice(3)
      this.$router.push('purchase/' + y)
      // this.$router.push()
    },
    fetch_data() {
      // // const self = this
      // this.is_loading_orders = true
      // var self = this
      // var myHeaders = new Headers()
      // myHeaders.append('Content-Type', 'application/json')
      // myHeaders.append(
      //   'Authorization',
      //   'Bearer ' + sessionStorage.getItem('operation_token')
      // )
      // var raw = {
      //   operation: 'sql',
      //   sql: 'select * from po.first',
      // }
      // var requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: JSON.stringify({ data : self.$en(raw) }),
      //   redirect: 'follow',
      // }
      // fetch(self.$store.state.api_url, requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => (
      //     console.log(self.$de(result)))
      //     // self.orders = self.$de(result))
      //     )
      //   .catch((error) => console.log('error', error))
      // self.is_loading_orders = false
    },
    select_order(x) {
      this.show_po = x
      this.edit_po = x
      this.order_d = false
      const self = this
      let h1 = {
        Authorization: 'Bearer ' + sessionStorage.getItem('operation_token'),
        'Content-Type': 'application/json',
      }
      let b1 = JSON.stringify({
        operation: 'search_by_value',
        schema: 'po',
        table: 'parties',
        search_attribute: 'PARTY',
        search_value: x.SUPPLIER,
        get_attributes: ['*'],
      })
      fetch(self.$store.state.api_url, {
        method: 'POST',
        body: b1,
        headers: h1,
      })
        .then(function (response) {
          return response.text()
        })
        .then(function (data) {
          console.log(data)
          self.supplier_details = JSON.parse(data)[0]
        })
      let h2 = {
        Authorization: 'Bearer ' + sessionStorage.getItem('operation_token'),
        'Content-Type': 'application/json',
      }
      let b2 = JSON.stringify({
        operation: 'search_by_value',
        schema: 'po',
        table: 'uuid',
        search_attribute: 'PO_NUMBER',
        search_value: x.PO_NUMBER,
        get_attributes: ['*'],
      })
      fetch(self.$store.state.api_url, {
        method: 'POST',
        body: b2,
        headers: h2,
      })
        .then(function (response) {
          return response.text()
        })
        .then(function (data) {
          console.log(data)
          self.order_details = JSON.parse(data)
        })
    },
    hide_order() {
      this.order_d = true
      this.show_po = {}
    },
    edit(x) {
      this.to_edit = true
      this.edit_po = x
    },
    save_now(x) {
      this.is_saving = true
      this.to_edit = false
      console.log(this.edit_po)
      console.log(x)
    },
  },
  components: { Isloading, EyeIcon, Bottombar, Sidebar },
}
</script>
