<template>
  <div class="bg-white dark:bg-gray-800 min-h-screen">
    <Bottombar />

    <div class="flex">
      <Sidebar />

      <div class="w-full m-5">

        <div class="flex items-center justify-between py-2">
          <div class="text-primary-700 ">Add/Edit Party</div>
          <button class="button">Add New</button>
        </div>

        <div class="">
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Party name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Color
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Category
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Price
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                  </th>
                  <td class="py-4 px-6">
                    Sliver
                  </td>
                  <td class="py-4 px-6">
                    Laptop
                  </td>
                  <td class="py-4 px-6">
                    $2999
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                  </th>
                  <td class="py-4 px-6">
                    White
                  </td>
                  <td class="py-4 px-6">
                    Laptop PC
                  </td>
                  <td class="py-4 px-6">
                    $1999
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                  </th>
                  <td class="py-4 px-6">
                    Black
                  </td>
                  <td class="py-4 px-6">
                    Accessories
                  </td>
                  <td class="py-4 px-6">
                    $99
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                  </th>
                  <td class="py-4 px-6">
                    Gray
                  </td>
                  <td class="py-4 px-6">
                    Phone
                  </td>
                  <td class="py-4 px-6">
                    $799
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                  </th>
                  <td class="py-4 px-6">
                    Red
                  </td>
                  <td class="py-4 px-6">
                    Wearables
                  </td>
                  <td class="py-4 px-6">
                    $999
                  </td>
                  <td class="py-4 px-6">
                    <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="px-4 py-2 ">

          <div class="mb-6">
            <label for="email">Your email</label>
            <input type="email" id="email" placeholder="name@flowbite.com" required="">
          </div>
          <div class="mb-6">
            <label for="password">Your password</label>
            <input type="password" required="">
          </div>
          <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
              <input type="checkbox" value="" required="">
            </div>
            <label for="remember">Remember me</label>
          </div>
          <button class="button">Submit</button>

        </div>

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

    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {

  },
  components: { Isloading, EyeIcon, Bottombar, Sidebar },
}
</script>