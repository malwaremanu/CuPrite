<template>
  <div class="min-h-screen select-none">
    <div class="p-2 flex items-center text-primary-600 dark:text-primary-600 dark:bg-gray-800">
      <button class="p-2  text-center">
        <NuxtLink to="/masters">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </NuxtLink>
      </button>

      <div class="text-primary-600 p-2 text-primary-600 dark:text-primary-600 dark:bg-gray-800">
        <div class="text-lg font-semibold">Masters Page</div>
        <div class="text-xs">Edit Party </div>
      </div>
    </div>

    <div class="text-primary-600 dark:text-primary-600 dark:bg-gray-800 p-4 min-h-screen">
      <div class="overflow-x-auto ">
        <div class="hidden">
          {{ parties }}
        </div>

        <div v-show="loading">


          Please wait. We are loading data.


          <div role="status" class="max-w-sm animate-pulse">
            <div class="p-4">
              <label class="">
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              </label>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>

            <span class="sr-only">Loading...</span>
          </div>

        </div>

        <div v-show="!loading">
          <div class="p-4">
            <label>Party Name</label>
            <input v-model="parties.PARTY" />
          </div>

          <div class="p-4">
            <label>Email</label>
            <input v-model="parties.EMAIL" />
          </div>

          <div class="p-4">
            <label>Address 1</label>
            <input v-model="parties.ADDRESS_1" />
          </div>

          <div class="p-4">
            <label>Address 2 </label>
            <input v-model="parties.ADDRESS_2" />
          </div>

          <div class="p-4">
            <label>Status</label>
            <select :select="parties.STATUS" v-model="parties.STATUS">
              <option value="ACTIVE">ACTIVE</option>
              <option value="INACTIVE">INACTIVE</option>
            </select>
          </div>

          <div class="p-4 flex items-center gap-2">
            <button @click="update_data(parties)" class="button"> {{ update }} </button>
            <button class="button"> Deactivate </button>
          </div>


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
  data() {
    return {
      loading: true,
      add_party_modal: false,
      password: '',
      edit_create: '',
      update: 'update',
      parties: {},
    }
  },
  mounted: function () {
    this.get_data() //method1 will execute at pageload
  },
  methods: {
    cons(x) {
      console.log(x)
    },

    get_data() {
      let self = this
      // console.log('url is' + url)

      axios
        .post(self.$store.state.api_url, {
          data: self.$en({
            operation: 'sql',
            sql: "select * from po.parties where id='" + self.$route.params.id + "'"
          })
        })
        .then(function (response) {
          console.log('this is party data', self.$de(response.data.data))

          if(self.$de(response.data.data).length == 0){
            alert('Party not found. Redirecting you to back page.')
            self.$router.push('../')
          }
          else {
            self.parties = self.$de(response.data.data)[0]          
          }
          console.log(self.parties)
          self.loading = false
        })
        .catch(function (error) {
          alert('Some error occured. Report to Manu')
          console.log(error)
        })
    },

    delete_data(x) {
      let self = this
      const axios = require('axios').default
      axios
        .delete(url + 'masters/parties/' + x)
        .then(function (response) {
          console.log('this is delete', response.data)
          axios
            .get(url + 'masters/parties')
            .then(function (response) {
              console.log('this is get after delete', response.data.msg)

              self.parties = response.data
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            })
          alert(response.data.msg)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    post_data() {
      let self = this
      const axios = require('axios').default
      console.log(self.temp_party)
      axios
        .post(url + 'masters/parties', this.temp_party)
        .then(function (response) {
          console.log('this is post data', response.data.msg)
          self.popup_msg = response.data.msg

          axios
            .get(url + 'masters/parties')
            .then(function (response) {
              console.log('this is get after post', response.data.msg)
              self.parties = response.data
              self.add_party_modal = false

              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            })

          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    update_data(x) {
      console.log(this.parties)
      const self = this
      self.update = "updating"
      axios
        .post(self.$store.state.api_url, {
          data: self.$en({
            operation: "update",
            schema: "po",
            table: "parties",
            records: [
              self.parties
            ]
          })
        })
        .then(function (response) {
          console.log(self.$de(response.data.data))
          alert(self.$de(response.data.data).message)
          self.update = "update"
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    edit_data(puuid) {
      let self = this
      const axios = require('axios').default
      axios
        .put(url + 'masters/parties/' + puuid, self.temp_party)
        .then(function (response) {
          console.log('this is put', response.data.msg)
          self.popup_msg = response.data.msg

          if (response.status == 200) {
            axios
              .get(url + 'masters/parties')
              .then(function (response) {
                console.log('this is get put', response.data.msg)
                self.parties = response.data
                self.add_party_modal = false
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
          } else {
            alert('Please try again.')
          }
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    cons(x) {
      console.log(x)
    },
  },
}
</script>