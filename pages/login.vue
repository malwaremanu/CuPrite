<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <a
          href="#"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Logo class="" />
        </a>
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
            >
              Sign in to your account
            </h1>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="text"
                v-model="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                v-model="password" @keydown.enter="login"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Remember me</label
                  >
                </div>
              </div>
              <button
                @click="walert"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </button>
            </div>
            <button
              @click="login"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <span v-text="login_btn"></span>
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <button
                @click="walert"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/logo.vue'
var url = process.env.base_url
const axios = require('axios').default

export default {
  pageTransition: 'page',
  data() {
    return {
      username: 'asd',
      password: 'asd@asd',
      popup_msg: '',
      login_btn: 'Login',
    }
  },
  methods: {
    walert() {
      // alert('We will work on it later on.')
      console.log(this.$en('Hellow this is manu'))
      var r = {
        status: 'success',
        data: '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',
      }
      console.log(r.data)
      console.log(this.$de(r.data))
    },
    login_old() {
      let self = this
      self.login_btn = 'Logging in...'
      console.log(this.username)
      console.log(this.password)
      axios
        .post(url + 'user/login', {
          username: this.username,
          password: this.password,
        })
        .then(function (response) {
          console.log('this is response', response.data.msg)
          self.popup_msg = response.data.msg
          if (response.data.status == 'error') {
            alert(response.data.msg)
            self.login_btn = 'Login'
          }
          if (response.data.status == 'success') {
            //alert(response.data.msg)
            self.login_btn = 'Logged In.'
            window.location.replace('/dasbhoard')
          }
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    login() {
      let self = this
      self.login_btn = 'Logging in...'
      axios
        .post(self.$store.state.api_url + '/login/', {
          operation: 'create_authentication_tokens',
          username: this.username,
          password: this.password,
        })
        .then(function (response) {
          console.log(response.status)
          console.log('this is now decoded : ', response.data)

          if (response.status == 200) {
            if (response.data._data.error) {
              alert(response.data._data.error)
              self.login_btn = 'Login'
            } else {
              self.login_btn = 'Login Succesfull'
              sessionStorage.setItem(
                'operation_token',
                response.data._data.operation_token
              )
              sessionStorage.setItem(
                'refresh_token',
                response.data._data.refresh_token
              )
              self.$router.push('/dashboard')
            }
          }
          if (response.status == 401) {
            alert('Error : Please try again.')
          }
        })
        .catch(function (error) {
          alert('Login Failed.')
          sessionStorage.removeItem('operation_token')
          sessionStorage.removeItem('refresh_token')
          self.login_btn = 'Login'
        })
    },
  },
  components: { Logo },
}
</script>
