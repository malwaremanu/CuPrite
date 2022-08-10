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

      <div
        v-for="user in employees"
        :key="user.id"
        class="
          block
          py-2
          px-4
          w-full
          border-b border-gray-200
          cursor-pointer
          hover:bg-gray-100 hover:text-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-700
          focus:text-blue-700
          dark:border-gray-600
          dark:hover:bg-gray-600
          dark:hover:text-white
          dark:focus:ring-gray-500
          dark:focus:text-white
        "
      >
        <div class="flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2">
              <img
                v-if="user.COUNTRY == 'INDIA'"
                class="w-5"
                src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png"
                alt=""
              />
              <div class="text-lg">{{ user.NAME }}</div>
            </div>

            <div class="flex items-center gap-3">
              <div class="text-sm text-gray-300">{{ user.PASSPORT_NO }}</div>
              <div class="text-sm text-red-600">
                {{ moment_date(user.PASSPORT_EXPIRY) }}
              </div>
            </div>
          </div>
        </div>

        <div v-for="(value, key) in user" :key="key" class="hidden">
          {{ key }} - {{ value }}
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-lg">
      <div role="status" class="my-7 animate-pulse">
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"
        ></div>
        <div
          class="
            h-2
            bg-gray-200
            rounded-full
            dark:bg-gray-700
            max-w-[460px]
            mb-2.5
          "
        ></div>
        <div
          class="
            h-2
            bg-gray-200
            rounded-full
            dark:bg-gray-700
            max-w-[500px]
            mb-2.5
          "
        ></div>
        <div
          class="
            h-2
            bg-gray-200
            rounded-full
            dark:bg-gray-700
            max-w-[450px]
            mb-2.5
          "
        ></div>
        <div
          class="
            h-2
            bg-gray-200
            rounded-full
            dark:bg-gray-700
            max-w-[380px]
            mb-2.5
          "
        ></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"
        ></div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
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

