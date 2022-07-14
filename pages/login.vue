<template>
  <div class="p-2 min-h-screen bg-ibps-900 select-none">
    <div class="bg-ibps-900">
      <button class="p-4 text-white text-center">
        <nuxt-link to="/">
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
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </nuxt-link>
      </button>
    </div>

    <div class="lg:flex items-center gap-2 w-full mt-14 mx-auto lg:w-1/2">
      <center class="py-5 p-2 lg:w-1/2">
        <Logo class="py-2" />
      </center>

      <div class="px-8 py-3 bg-white rounded-xl lg:w-1/2">
        <div class="text-ibps-900 text-center pt-2 text-xl">
            Login Panel
        </div>

        <div class="py-2">
          <div class="text-gray-400">
            Email ID
          </div>
          <input type="text" class="px-4 py-2 border border-gray-400 rounded-lg w-full" />
        </div>

        <div class="py-2">
          <div class="text-gray-400">Password</div>
          <input type="password" class="px-4 py-2 border border-gray-400 rounded-lg w-full" />
          <div class="text-right">
            <span
              @click="walert"
              class="text-gray-400 hover:text-ibps-900 font-light cursor-pointer text-sm"
            >reset password ?</span>
          </div>
        </div>

        <div class="py-2">
            <Buttonprimary title="Login" />
        </div>

        <div class="py-2">
            <nuxt-link to="/register">
                <Buttonprimary title="I don't have an account" />
            </nuxt-link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  methods: {
    walert() {
      alert('We will work on it later on.')
    },
  },
}
</script>