<template>
  <div class="p-2 min-h-screen bg-gray-900 select-none">
    <Backhome />

    <div class="lg:flex items-center gap-2 w-full mt-14 mx-auto lg:w-1/2">
      <center class="py-5 p-2 lg:w-1/2">
        <Logo class="py-2 hidden" />
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

        <div class="py-2" @click="login_token">
          <Buttonprimary :title="login_btn" />
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
const axios = require('axios').default
export default {
  pageTransition: 'page',
  data() {
    return {
      username: 'malwareman',
      password: 'Manu@harper1',
      popup_msg: '',
      login_btn : 'Login',
    }
  },
  methods: {
    walert() {
      alert('We will work on it later on.')
    },
    login() {
      let self = this
      self.login_btn = "Logging in..."
      
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
              self.login_btn = "Login"
          }
          if(response.data.status == 'success'){
              //alert(response.data.msg)
              self.login_btn = "Logged In."
              window.location.replace('/dasbhoard')
          }
          
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    login_token(){
      let self = this
      self.login_btn = "Logging in..."
      axios
        .post(self.$store.state.api_url, {
          "operation": "create_authentication_tokens",
          username: this.username,
          password: this.password
      }).then(function (response) {
          console.log('this is response', response.data.msg)
          if(response.status == 200){          
              self.login_btn = "Login Succesfull"
              document.cookie = "operation_token=" + response.data.operation_token;              
              document.cookie = "refresh_token=" + response.data.refresh_token;        
              self.$router.push('/dashboard')
          }
          if(response.status == 401){  
            alert("Error : Please try again.")
          }                    
        })
        .catch(function (error) {
          alert(error.response.data.error)
          document.cookie = "operation_token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = "refresh_token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';          
          self.login_btn = "Login"   
        })

    }
  },
}
</script>