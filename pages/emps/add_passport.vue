<template>
  <div
    class="
      min-h-screen
      bg-gradient-to-tr
      from-gray-900
      via-gray-800
      to-gray-900
      p-6
    "
  >
    <Bottombar />

    <div class="flex items-center justify-between mb-2">
      <div class="text-white text-2xl mb-2">New Passport</div>

      <nuxt-link to="/emps/passports">
        <div
          class="
            text-white text-xs
            p-1
            border
            rounded-full
            flex
            items-center
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </nuxt-link>
    </div>

    <div
      class="
        w-full
        text-sm
        font-medium
        text-gray-900
        bg-white
        rounded-lg
        border border-gray-200
        dark:bg-gray-700 dark:border-gray-600 dark:text-white
      "
    >
      <a
        href="#"
        aria-current="true"
        class="
          block
          py-2
          px-4
          w-full
          text-white
          bg-blue-700
          rounded-t-lg
          border-b border-gray-200
          cursor-pointer
          dark:bg-gray-800 dark:border-gray-600
        "
      >
        Employee Details
      </a>

      <div class="block py-2 px-4 w-full outline-none ">
        <div class="py-1.5">
          <div class="mb-1"> PASSPORT NO </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 
        
        <div class="py-1.5">
          <div class="mb-1"> PASSPORT EXPIRY </div>
          <input type="date" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 

        <div class="py-1.5">
          <div class="mb-1"> COUNTRY </div>
          <select class="bg-transparent border px-4 py-2 w-full rounded border-gray-400">
            <option value="INDIA">INDIA</option>
            <option value="PAKISTAN">PAKISTAN</option>
            <option value="DRC">DRC</option>            
          </select>
        </div>         

        <div class="py-1.5">
          <div class="mb-1"> DATE OF BIRTH </div>
          <input type="date" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 

        <div class="py-1.5">
          <div class="mb-1"> PLACE OF BIRTH </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 


        <div class="py-1.5">
          <div class="mb-1"> FIRST NAME (as per Passport) </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 

        <div class="py-1.5">
          <div class="mb-1"> SURNAME </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 
       
        <div class="py-1.5">
          <div class="mb-1"> ADDRESS </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 

        <div class="py-1.5">
          <div class="mb-1"> STATE </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 

        <div class="py-1.5">
          <div class="mb-1"> COUNTRY CODE </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 

        <div class="py-1.5">
          <div class="mb-1"> PIN_CODE </div>
          <input type="text" class="bg-transparent border px-4 py-2 w-full rounded border-gray-400" />
        </div> 

        <div class="py-1.5">
          <div class="mb-1"> GENDER </div>
          <select class="bg-transparent border px-4 py-2 w-full rounded border-gray-400">
            <option value="M">MALE</option>
            <option value="F">FEMALE</option>
            <option value="O">OTHER</option>            
          </select>
        </div> 

        
        <!-- 
          {
              "PASSPORT_EXPIRY": "26/05/2023",
              "id": "047f91af-b9c8-40b4-96b2-205cd5e8da6e",
              "COUNTRY": "INDIA",
              "__createdtime__": 1660095577580,
              "GIVEN_NAME": "VENKATESAN",
              "DATE_OF_BIRTH": "01/06/1978",
              "SURNAME": "ARUMUGAM MUDALIAR",
              "NAME": "ARUMUGAM MUDALIAR VENKATESAN",
              "PASSPORT_EXPIRY_IN": 289,
              "GENDER": "M",
              "STATE": "TAMILNADU",
              "COUNTRY_CODE": "IND",
              "PLACE_OF_BIRTH": "BHANDUP, MAHARASHTRA",
              "ADDRESS": "NO. 1/57-A, PILLIAR KOIL STREET, KANKEYANALLUR, GUDIYATHAM, VELLORE",
              "PASSPORT_NO": "L3331570",
              "__updatedtime__": 1660095577580,
              "PIN_CODE": 632006,
              "UUID": "L3331570"
          } 
        -->

      </div>

      <div class="block py-2 px-4 w-full outline-none">
        <div class="flex items-center gap-2">
          <button class="px-4 py-2 bg-gray-900 border border-gray-700 hover:bg-gray-800 rounded"> Save </button>
          <button class="px-4 py-2 border border-gray-900 text-gray-300 rounded"> Reset </button>
        </div>
      </div>

     
    </div>

     <div class="mb-20"></div>
  </div>
</template>

<script>
import Bottombar from '../../components/bottombar.vue'
import api from '../../api'
import moment from 'moment'

export default {
  pageTransition: 'page',
  data() {
    return {
      employees: {},
      user: [
        {
          name: '',
        },
      ],
    }
  },
  mounted: function () {
    this.fetch_me()
  },
  methods: {
    moment_date(x) {
      if (x) {
        var y = x.split('/')
        var z = y[2] + '' + y[1] + '' + y[0]
        console.log(z)
        return 'Expires ' + moment(z).fromNow()
      }
      return ''
    },
    walert() {
      alert(this.$store.state.api_url)
      //console.log(this)
    },
    async fetch_me() {
      // this.employees = await api({
      //   operation: 'sql',
      //   sql: 'select * from emps.passport',
      // })
    },
  },
  components: { Bottombar },
}
</script>

