<template>
  <div class="min-h-screen dark:bg-gradient-to-tr dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 bg-white p-6">
    <Bottombar />

    <div class="flex items-center justify-between mb-2">
      <div class="text-gray-900 dark:text-white text-2xl mb-2">Dashboard</div>
    </div>

    <div class="grid-3 ">      
      <nuxt-link to="/purchase" class="card">
        Purchase Orders
      </nuxt-link>
      <div class="card">
        Parties
      </div>
    </div>

    <div class="hidden">

      <div class="mx-auto my-5">
        <a href="#"
          class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Welcome,
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.</p>
        </a>
      </div>

      <div
        class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <a href="#" aria-current="true"
          class="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600">Links</a>

        <nuxt-link to="/purchase"
          class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Purchase Orders</nuxt-link>

        <nuxt-link to="/masters/visa"
          class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Visa
        </nuxt-link>

        <nuxt-link to="/masters/emp"
          class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Employees
        </nuxt-link>

        <nuxt-link to="/emps/passports"
          class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Passports
        </nuxt-link>

        <nuxt-link to="/masters"
          class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
          Masters
        </nuxt-link>

      </div>

      <div class="mx-auto max-w-lg">
        <div role="status" class="my-7 animate-pulse">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[500px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[450px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[380px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bottombar from '../components/bottombar.vue'
import api from '../api'

export default {
  pageTransition: 'page',
  data() {
    return {
      user_me: {
        role: {
          id: ''
        }
      },
      user: [
        {
          name: ''
        }
      ]
    }
  },
  mounted: function () {
    this.fetch_me()

  },
  methods: {
    walert() {
      alert(this.$store.state.api_url)
      //console.log(this)
    },
    async fetch_me() {
      console.clear()
    }

  },
  components: { Bottombar },
}
</script>

