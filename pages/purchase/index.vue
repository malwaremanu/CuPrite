<template>
  <div class="bg-gray-900 min-h-screen">
    <Bottombar />    
    <div v-show="order_d">
      <div class="text-xl flex items-center text-white gap-2 p-2">
        <nuxt-link class="p-1" to="/dashboard">
          <svg
            class="w-5 h-5"
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
        </nuxt-link>
        <div>Purchase Order</div>
      </div>
      <div
        class="overflow-x-auto relative shadow-md rounded-lg lg:w-[90%] mx-auto"
      >
        <Isloading v-show="is_loading_orders" />
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="
              text-xs text-gray-700
              uppercase
              bg-gray-50
              dark:bg-gray-700 dark:text-gray-400
            "
          >
            <tr>
              <th scope="col" class="py-3 px-6">PO NUMBER</th>
              <th scope="col" class="py-3 px-6">SUPPLIER</th>
              <th scope="col" class="py-3 px-6">PO DATE</th>
              <th scope="col" class="py-3 px-6">PRICE</th>
              <th scope="col" class="py-3 px-6 hidden">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="order in orders"
              :key="order.id"
              @click="select_order(order)"
              class="
                cursor-pointer
                hover:bg-gray-200
                dark:hover:bg-gray-600
                bg-white
                border-b
                dark:bg-gray-800 dark:border-gray-700
              "
            >
              <th scope="row" class="py-4 px-6">
                <div
                  class="
                    flex
                    items-center
                    justify-between
                    font-medium
                    text-gray-900
                    whitespace-nowrap
                    dark:text-white
                  "
                >
                  {{ order.PO_NUMBER }}
                </div>
              </th>
              <td class="py-4 px-6 text-xs">{{ order.SUPPLIER }}</td>
              <td class="py-4 px-6 text-xs">{{ order.PO_DATE }}</td>
              <td class="py-4 px-6">${{ order.GROSS_AMOUNT }}</td>
              <td class="py-4 px-6 hidden">
                <div
                  @click="select_order(order)"
                  class="
                    flex
                    items-center
                    gap-2
                    border border-gray-500
                    hover:border-gray-50 hover:text-gray-50
                    px-3
                    py-2
                    text-xs
                    text-white
                    rounded-full
                    cursor-pointer
                  "
                >
                  <!-- <svg
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
                      d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"
                    />
                  </svg> -->

                  <EyeIcon />
                  View
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-show="!order_d">
      <div>
        <div class="text-xl flex items-center justify-between gap-2 p-2">
          <div class="flex items-center gap-2 text-white">
            <div class="p-1 cursor-pointer" @click="hide_order">
              <svg
                class="w-5 h-5"
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
            </div>
            <div>{{ show_po.PO_NUMBER }}</div>
          </div>
          <div class="flex items-center justify-between gap-3">
            <div class="flex items-center text-xs uppercase gap-2">
              <span
                class="
                  border border-gray-500
                  py-1
                  px-2
                  rounded-full
                  hover:border-gray-50
                  cursor-pointer
                  text-white
                "
                @click="print_it(show_po.PO_NUMBER)"
                >Print</span
              >

              <span
                class="
                  border border-gray-500
                  py-1
                  px-2
                  rounded-full
                  hover:border-gray-50
                  cursor-pointer
                "
                @click="edit(show_po)"
                v-show="!to_edit"
                >Edit</span
              >

              <span
                class="
                  border border-gray-500
                  py-1
                  px-2
                  rounded-full
                  hover:border-gray-50
                  cursor-pointer
                "
                @click="to_edit = false"
                v-show="to_edit"
                >Cancel</span
              >

              <span
                class="
                  border border-gray-300
                  py-1
                  bg-black
                  px-2
                  rounded-full
                  hover:border-gray-50
                  cursor-pointer
                "
                @click="save_now(edit_po)"
                v-show="to_edit"
                >Save</span
              >
            </div>
          </div>
        </div>
        <div
          class="
            overflow-x-auto
            relative
            shadow-md
            rounded-lg
            lg:w-[90%]
            mx-auto
          "
        >
          <div class="p-4 mx-auto" v-show="is_saving">
            <svg
              aria-hidden="true"
              class="
                mr-2
                w-8
                h-8
                text-gray-200
                animate-spin
                dark:text-gray-600
                fill-blue-600
              "
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
          <div
            v-show="!is_saving"
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <div
              v-for="(value, key) in show_po"
              :key="key"
              class="
                hidden
                hover:bg-gray-200
                dark:hover:bg-gray-600
                bg-white
                border-b
                dark:bg-gray-800 dark:border-gray-700
              "
            >
              <p
                scope="row"
                class="
                  font-medium
                  px-4
                  pt-2
                  text-gray-900
                  whitespace-nowrap
                  dark:text-white
                "
              >
                {{ key }}
              </p>
              <p class="px-6">
                <input
                  type="text"
                  :value="value"
                  class="px-4 py-2 bg-gray-700 py-1 text-white"
                  v-show="to_edit"
                />
                <span v-show="!to_edit">{{ value }}</span>
              </p>
            </div>

            <hr />

            <div class="flex items-center w-full">
              <div
                class="
                  hover:bg-gray-200
                  w-full
                  dark:hover:bg-gray-600
                  bg-white
                  border-b
                  dark:bg-gray-800 dark:border-gray-700
                "
              >
                <div class="text-white p-2 text-lg">Purchase Order</div>
                <div class="px-2 pb-2">{{ show_po.PO_NUMBER }}</div>
              </div>

              <div
                class="
                  hover:bg-gray-200
                  w-full
                  dark:hover:bg-gray-600
                  bg-white
                  border-b
                  dark:bg-gray-800 dark:border-gray-700
                "
              >
                <div class="text-white p-2 text-lg">PO Date</div>
                <div class="px-2 pb-2">{{ show_po.PO_DATE }}</div>
              </div>
            </div>

            <div
              class="
                hover:bg-gray-200
                w-full
                dark:hover:bg-gray-600
                bg-white
                border-b
                dark:bg-gray-800 dark:border-gray-700
              "
            >
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

            <div
              class="
                hover:bg-gray-200
                w-full
                dark:hover:bg-gray-600
                bg-white
                border-b
                dark:bg-gray-800 dark:border-gray-700
              "
            >
              <div class="text-white p-2 text-lg">From</div>
              <div class="px-2 pb-2">
                <span class="font-semibold text-white">{{ show_po.FROM }}</span>
                <br />1234 <br />113sde <br />awe1d
              </div>
            </div>

            <div class="flex items-center w-full">
              <div
                class="
                  hover:bg-gray-200
                  w-full
                  dark:hover:bg-gray-600
                  bg-white
                  border-b
                  dark:bg-gray-800 dark:border-gray-700
                "
              >
                <div class="text-white p-2 text-lg">Discount</div>
                <div class="px-2 pb-2">{{ show_po.DISCOUNT }}</div>
              </div>

              <div
                class="
                  hover:bg-gray-200
                  w-full
                  dark:hover:bg-gray-600
                  bg-white
                  border-b
                  dark:bg-gray-800 dark:border-gray-700
                "
              >
                <div class="text-white p-2 text-lg">TVA</div>
                <div class="px-2 pb-2">{{ show_po.TVA }}</div>
              </div>
            </div>

            <div class="overflow-x-auto relative shadow-md rounded-lg mx-auto">
              <table
                class="
                  w-full
                  text-sm text-left text-gray-500
                  dark:text-gray-400
                "
              >
                <!--  <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Our products
            <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
            </caption> 
              -->

                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3 px-6">S. No.</th>
                    <th scope="col" class="py-3 px-6">PART No.</th>
                    <th scope="col" class="py-3 px-6">DESC.</th>
                    <th scope="col" class="py-3 px-6">QTY.</th>
                    <th scope="col" class="py-3 px-6">DISCOUNT</th>
                    <th scope="col" class="py-3 px-6">BASE PRICE</th>
                    <th scope="col" class="py-3 px-6">NET AMOUNT</th>
                    <th scope="col" class="py-3 px-6">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="order in order_details"
                    :key="order"
                    class="
                      cursor-pointer
                      text-left
                      hover:bg-gray-400
                      dark:hover:bg-gray-600
                      bg-white
                      border-b
                      dark:bg-gray-800 dark:border-gray-700
                    "
                  >
                    <th scope="row" class="py-4 px-6">
                      <div
                        class="
                          flex
                          items-center
                          justify-between
                          font-medium
                          text-gray-900
                          whitespace-nowrap
                          dark:text-white
                        "
                      >
                        {{ order_details.order }}
                      </div>
                    </th>
                    <td class="py-4 px-6 text-xs">{{ order.PART_NUMBER }}</td>
                    <td class="py-4 px-6 text-xs w-90 TEXT-LEFT">
                      {{ order.DESCRIPTION }}
                    </td>
                    <td class="py-4 px-6 text-xs">{{ order.QUANTITY }}</td>
                    <td class="py-4 px-6 text-xs">{{ order.DISCOUNT }}</td>
                    <td class="py-4 px-6 text-xs">{{ order.BASE_PRICE }}</td>
                    <td class="py-4 px-6 text-xs">{{ order.NET_AMOUNT }}</td>
                    <td class="py-4 px-6 text-xs">
                      {{ order.STATUS }}
                      <br />
                      <small>{{ order.COMMENTS }}</small>
                    </td>
                  </tr>

                  <tr
                    class="hidden 
                      cursor-pointer
                      text-left
                      hover:bg-gray-400
                      dark:hover:bg-gray-600
                      bg-white
                      border-b
                      dark:bg-gray-800 dark:border-gray-700
                    "
                  >
                    <td colspan="5"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Isloading from '../../components/isloading.vue'
import { EyeIcon } from '@vue-hero-icons/outline'
import Bottombar from '~/components/bottombar.vue'

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
    this.fetch_data()
  },
  methods: {
    print_it(x){
      console.log(x)
      var y = x.slice(3,)
      this.$router.push('purchase/' + y)
      // this.$router.push()
    },
    fetch_data() {
      // const self = this
      this.is_loading_orders = true
      var self = this
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')
      myHeaders.append(
        'Authorization',
        'Bearer ' + sessionStorage.getItem('operation_token')
      )
      var raw = JSON.stringify({
        operation: 'sql',
        sql: 'select * from po.first',
      })
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      }
      fetch(self.$store.state.api_url, requestOptions)
        .then((response) => response.text())
        .then((result) => (self.orders = JSON.parse(result)))
        .catch((error) => console.log('error', error))
      self.is_loading_orders = false
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
  components: { Isloading, EyeIcon, Bottombar },
}
</script>

<style lang="postcss" scoped>
/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px grey;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c9c9c9;
}

input,
textarea,
select {
  @apply px-4 py-2 border text-gray-50 bg-gray-700 rounded-md w-full;
}
</style>