<template>
  <div class="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 p-6">
    <div class="flex items-center justify-between mb-2">
      <div class="text-white text-2xl mb-2">Users</div>
    </div>

<div @click="get_data()"> Get Data </div>

    <div
      class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <a
        href="#"
        aria-current="true"
        class="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
      >Employees</a>

      <a
        href="#"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >Emp Name Loops</a>

      {{ emps }}
    </div>

<div class="text-white">
ll - 
    <div v-for="user in users" :key="user"> 
      user : {{ user }}
    </div>

</div>

    <Bottombar />
  </div>
</template>

<script>
import Bottombar from '../components/bottombar.vue'
import api from '../api'
// console.log(process)

var sheet_id = '1GxrwkN0KPbcSFBL8iL-SWg874MTEf2wdDtPcTOZywZ0'
var sheet_name = 'Database'

var url =
  'https://docs.google.com/spreadsheets/d/' +
  sheet_id +
  '/gviz/tq?sheet=' +
  sheet_name +
  '&tq='

export default {
  pageTransition: 'page',
  data() {
    return {
      emps: [],
      users : []
    }
  },
  mounted: function () {
    this.get_data() //method1 will execute at pageload
  },
  methods: {
    async get_data() {
      let self = this
      this.users = await api({
        "operation": "sql",
        "sql": "SELECT * FROM po.jibin"
      })
    },
  },
  components: { Bottombar },
}
</script>

<style lang="postcss" scoped>
  .btn_nav {
    @apply text-white hover:text-gray-100 bg-gray-800 rounded-xl text-center;
  }

  .btn_nav div {
    @apply mt-1 text-sm;
  }
</style>