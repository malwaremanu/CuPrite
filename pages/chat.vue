<template>
  <div class="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 p-6">
    <div class="flex items-center justify-between mb-2">
      <div class="text-white text-2xl mb-2">Chat</div>
    </div>

    <div
      class="mb-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center justify-between p-4">
        <div class="flex items-center gap-2 select-none">
          <img
            class="h-14 rounded-full shadow-lg"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Bonnie image"
          />
          <div class="flex flex-col p-1">
            <h5 class="text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="-mt-0.5 text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
          </div>
        </div>

        <div>
          <div
            class="text-gray-500 p-2 border border-gray-500 rounded-xl text-xl flex items-center gap-2 cursor-pointer"
          >
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
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
    >
      <a
        href="#"
        aria-current="true"
        class="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
      >Profile</a>
      <a
        href="#"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >Settings</a>
      <a
        href="#"
        class="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >Messages</a>
      <a
        href="#"
        class="block py-2 px-4 w-full rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
      >Download</a>
    </div>

    <div>
      <label
        for="website-admin"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >Username</label>
      <div class="flex">
        <input
          type="text" v-model="msg_text"         
          class="rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          placeholder="Bonnie Green"
        />
        <span @click="send_msg"
          class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
        >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
        </span>
      </div>
    </div>

    <Bottombar />
  </div>
</template>

<script>
import Bottombar from '../components/bottombar.vue'
export default {
  pageTransition: 'page',
  data() {
    return {
        msg_text : '', 
    }
  },
  methods: {
    send_msg() {
      // const self = this
      alert(this.msg_text)
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