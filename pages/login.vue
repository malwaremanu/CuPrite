<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div
        class="
          flex flex-col
          items-center
          justify-center
          px-6
          py-8
          mx-auto
          md:h-screen
          lg:py-0
        "
      >
        <a
          href="#"
          class="
            flex
            items-center
            mb-6
            text-2xl
            font-semibold
            text-gray-900
            dark:text-white
          "
        >
          <Logo class="" />
        </a>
        <div
          class="
            w-full
            bg-white
            rounded-lg
            shadow
            dark:border
            md:mt-0
            sm:max-w-md
            xl:p-0
            dark:bg-gray-800 dark:border-gray-700
          "
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="
                text-xl
                font-bold
                leading-tight
                tracking-tight
                text-gray-900
                md:text-2xl
                dark:text-white
              "
            >
              Sign in to your account
            </h1>

            <div>
              <label
                for="email"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                "
                >Your email</label
              >
              <input
                type="text"
                v-model="username"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-primary-600 focus:border-primary-600
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="
                  block
                  mb-2
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                "
                >Password</label
              >
              <input
                type="password"
                v-model="password"
                placeholder="••••••••"
                class="
                  bg-gray-50
                  border border-gray-300
                  text-gray-900
                  sm:text-sm
                  rounded-lg
                  focus:ring-primary-600 focus:border-primary-600
                  block
                  w-full
                  p-2.5
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                  dark:text-white
                  dark:focus:ring-blue-500
                  dark:focus:border-blue-500
                "
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
                    class="
                      w-4
                      h-4
                      border border-gray-300
                      rounded
                      bg-gray-50
                      focus:ring-3 focus:ring-primary-300
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:focus:ring-primary-600
                      dark:ring-offset-gray-800
                    "
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
                class="
                  text-sm
                  font-medium
                  text-primary-600
                  hover:underline
                  dark:text-primary-500
                "
              >
                Forgot password?
              </button>
            </div>
            <button
              @click="login"
              class="
                w-full
                text-white
                bg-primary-600
                hover:bg-primary-700
                focus:ring-4 focus:outline-none focus:ring-primary-300
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                text-center
                dark:bg-primary-600
                dark:hover:bg-primary-700
                dark:focus:ring-primary-800
              "
            >
              <span v-text="login_btn"></span>
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?
              <button
                @click="walert"
                class="
                  font-medium
                  text-primary-600
                  hover:underline
                  dark:text-primary-500
                "
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
      username: 'malwareman',
      password: 'Manu@harper1',
      popup_msg: '',
      login_btn: 'Login',
    }
  },
  methods: {
    walert() {
      alert('We will work on it later on.')
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
        .post(self.$store.state.api_url, {
          operation: 'create_authentication_tokens',
          username: this.username,
          password: this.password,
        })
        .then(function (response) {
          console.log('this is response', response.data.msg)
          if (response.status == 200) {
            self.login_btn = 'Login Succesfull'
            // document.cookie = "operation_token=" + response.data.operation_token;
            // localStorage.setItem("operation_token", response.data.operation_token);
            sessionStorage.setItem(
              'operation_token',
              response.data.operation_token
            )
            sessionStorage.setItem('refresh_token', response.data.refresh_token)
            // localStorage.setItem("refresh_token", response.data.refresh_token)
            // document.cookie = "refresh_token=" + response.data.refresh_token;
            self.$router.push('/dashboard')
          }
          if (response.status == 401) {
            alert('Error : Please try again.')
          }
        })
        .catch(function (error) {
          alert(error.response.data.error)
          // document.cookie = "operation_token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          sessionStorage.removeItem('operation_token')
          sessionStorage.removeItem('refresh_token')
          // document.cookie = "refresh_token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          self.login_btn = 'Login'
        })
    },
  },
  components: { Logo },
}
</script>