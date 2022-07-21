<template>
  <div class="p-2 min-h-screen bg-gray-900 select-none">
    <Backhome />

    <div class="lg:flex items-center gap-2 w-full mt-14 mx-auto lg:w-1/2">
      <center class="py-5 p-2 lg:w-1/2">
        <Logo class="py-2" />
      </center>

      <div class="px-8 py-3 bg-white rounded-xl lg:w-1/2">
        <div class="text-gray-900 text-center pt-2 text-xl">Login Panel</div>

        <div class="py-2">
          <div class="text-gray-400">Email ID / Username</div>
          <input
            type="text"
            class="px-4 py-2 border border-gray-400 rounded-lg w-full"
            v-model="username"
          />
        </div>

        <div class="py-2">
          <div class="text-gray-400">Password</div>
          <input
            type="password"
            class="px-4 py-2 border border-gray-400 rounded-lg w-full"
            v-model="password"
          />

          <div class="text-right">
            <span
              @click="walert"
              class="text-gray-400 hover:text-gray-900 font-light cursor-pointer text-sm"
            >reset password ?</span>
          </div>
        </div>

        <div
          v-show="popup_msg"
          class="text-center text-xs lower p-1 border rounded-md"
        >{{ popup_msg }}</div>

        <div class="py-2" @click="login">
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
var url = process.env.base_url
export default {
  data() {
    return {
      username: 'manupal',
      password: '',
      popup_msg: '',
    }
  },
  methods: {
    walert() {
      alert('We will work on it later on.')
    },
    login() {
      let self = this
      const axios = require('axios').default
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
          if(response.data.status == 'error'){
              alert(response.data.msg)
          }
          if(response.data.status == 'success'){
              //alert(response.data.msg)
              window.location.replace('/masters')
          }
          
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>