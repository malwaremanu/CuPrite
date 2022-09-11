<template>
  <div class="min-h-screen bg-gray-900 select-none">
    <div class="bg-gray-900 p-2 flex items-center">
      <button class="p-2 text-white text-center">
        <NuxtLink to="/purchase">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </NuxtLink>
      </button>

      <div class="text-white p-2">
        <div class="text-lg font-semibold">Masters Page</div>
        <div class="text-xs">Parties Management</div>
      </div>
    </div>

    <div class="text-white p-4">
      <div>
        <div class="text-gray-900 md:flex items-center gap-2 m-2">
          <button class="px-4 py-2 flex items-center bg-white rounded-full text-gray-900 m-1 gap-1" @click="get_data">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Data
          </button>

          <button @click="party_popup('show', 'Create')"
            class="px-4 py-2 flex items-center bg-white rounded-full text-gray-900 m-1 gap-1">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>

            <h1>Add New Party</h1>
          </button>
        </div>
      </div>

      <div class="p-1 overflow-x-auto hidden">
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-sm text-gray-200 uppercase bg-gray-900 border border-gray-700">
              <tr>
                <th scope="col" class="py-3 px-6">Name & Address</th>
                <th scope="col" class="py-3 px-6">Contact Details</th>
                <th scope="col" class="py-3 px-6">Registration Details</th>
                <th scope="col" class="py-3 px-6">Contact Person Details</th>
                <th scope="col" class="py-3 px-6">Added By</th>
                <th scope="col" class="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="party in parties" :key="party.p_uuid" class="bg-gray-800 text-gray-300 border-b">
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ party.PARTY }}
                  <br />
                  <i v-show="!party.party" class="text-red-300">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </i>
                  <br>
                  <div class="text-gray-300 text-xs ">
                    {{ party.ADDRESS_1 }}
                    <br />
                    {{ party.ADDRESS_2 }}
                  </div>

                </td>
                <td class="py-4 px-6">
                  {{ party.p_contacts_phone }}
                  <br />
                  {{ party.p_contacts_fax }}
                  <br />
                  {{ party.p_contacts_phone }}
                  <br />
                  {{ party.p_contacts_website }}
                </td>
                <td class="py-4 px-6">
                  {{ party.EMAIL }}
                  <br />
                  {{ party.p_contacts_phone }}
                  <br />
                  {{ party.p_contacts_fax }}
                  <br />
                  {{ party.p_contacts_website }}
                </td>
                <td class="py-4 px-6">
                  {{ party.p_cp_1_name }}
                  <br />
                  {{ party.p_cp_1_phone }}
                  <br />
                  {{ party.p_cp_1_email }}
                  <hr />
                  {{ party.p_cp_2_name }}
                  <br />
                  {{ party.p_cp_2_phone }}
                  <br />
                  {{ party.p_cp_2_email }}
                </td>

                <td class="py-4 px-6">
                  {{ party.p_author }}
                  <br />
                  <span class="text-xs" v-text="$moment(party.__createdtime__).fromNow()"></span>
                </td>
                <td class="py-4 px-6">
                  <button class="hover:text-red-500" @click="delete_data(party.p_uuid)">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>

                  <button class="hover:text-green-500" @click="party_popup('show', 'Edit', party)">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                PARTY & STATUS
              </th>
              <th scope="col" class="py-3 px-6">
                EMAIL
              </th>
              <th scope="col" class="py-3 px-6">
                ADDRESS_1
              </th>
              <th scope="col" class="py-3 px-6">
                ADDRESS_2
              </th>
              <th scope="col" class="py-3 px-6">
                __createdtime__ <br />
                __updatedtime__
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in parties" :key="p.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ p.PARTY }} <br>
                {{ p.STATUS }}
              </th>
              <td class="py-4 px-6">
                {{ p.EMAIL }}
              </td>
              <td class="py-4 px-6">
                {{ p.ADDRESS_1 }}
              </td>
              <td class="py-4 px-6">
                {{ p.ADDRESS_2 }}
              </td>
              <td class="py-4 px-6">
                {{ p.__createdtime__ }} <br />
                {{ p.__updatedtime__ }}
              </td>
              <td class="py-4 px-6 space-x-3">
                <div class="flex items-center gap-2 " v-show="p.id">
                  <nuxt-link :to="'party/' + p.id"><button class="button"> Edit </button></nuxt-link>
                  <button class="button"> Deactivate </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>


      </div>

    </div>

    <Footer />

    <!-- Popup -->
    <div v-show="add_party_modal" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="w-full p-4">
          <div class="relative bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
            <div class="bg-gray-800 p-4 sm:p-6 sm:pb-4 w-full">
              <div class="mt-3 text-center">
                <h3 class="text-lg leading-6 font-medium text-gray-200" id="modal-title">{{ edit_create }} Party</h3>
                <div class="mt-2">
                  <div class="text-sm text-gray-500">
                    <div class="text-white mb-2">
                      <div class="text-xs p-1 text-left">Name</div>
                      <input type="text" v-model="temp_party.p_name" />
                    </div>

                    <div class="text-white mb-2 md:flex items-center gap-3 w-full">
                      <div class="w-full">
                        <div class="text-xs p-1 text-left">Address 1</div>
                        <textarea v-model="temp_party.p_address_1"></textarea>
                      </div>
                      <div class="w-full">
                        <div class="text-xs p-1 text-left">Address 2</div>
                        <textarea v-model="temp_party.p_address_2"></textarea>
                      </div>
                    </div>

                    <div class="p-0.5 border border-gray-600 rounded px-4 py-2 my-2">
                      <label class="text-left text-white p-2">Company Contact Details</label>
                      <div class="text-white mb-2 md:flex items-center gap-3 w-full">
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Telephone</div>
                          <input type="text" v-model="temp_party.p_contacts_phone" />
                        </div>
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Fax</div>
                          <input type="text" v-model="temp_party.p_contacts_fax" />
                        </div>

                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Email</div>
                          <input type="text" v-model="temp_party.p_contacts_email" />
                        </div>

                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Website</div>
                          <input type="text" v-model="temp_party.p_contacts_website" />
                        </div>
                      </div>
                    </div>

                    <div class="p-0.5 border border-gray-600 rounded px-4 py-2 my-2">
                      <label class="text-left text-white p-2">Company Registration</label>
                      <div class="text-white mb-2 md:flex items-center gap-3 w-full">
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">N° RCCM</div>
                          <input type="text" v-model="temp_party.p_id_rccm" />
                        </div>
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">N° NIF</div>
                          <input type="text" v-model="temp_party.p_id_nif" />
                        </div>

                        <div class="w-full">
                          <div class="text-xs p-1 text-left">N° ID</div>
                          <input type="text" v-model="temp_party.p_id_id" />
                        </div>

                        <div class="w-full">
                          <div class="text-xs p-1 text-left">NAT N° TVA</div>
                          <input type="text" v-model="temp_party.p_id_tva" />
                        </div>
                      </div>
                    </div>

                    <div class="p-0.5 border border-gray-600 rounded px-4 py-2 my-2">
                      <label class="text-left text-white p-2">Contact Person</label>
                      <div class="text-white mb-2 md:flex items-center gap-3 w-full">
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Name</div>
                          <input type="text" v-model="temp_party.p_cp_1_name" />
                        </div>
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Phone</div>
                          <input type="text" v-model="temp_party.p_cp_1_phone" />
                        </div>
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Email</div>
                          <input type="text" v-model="temp_party.p_cp_1_email" />
                        </div>
                      </div>
                    </div>

                    <div class="p-0.5 border border-gray-600 rounded px-4 py-2 my-2">
                      <label class="text-left text-white p-2">Contact Person 2</label>
                      <div class="text-white mb-2 md:flex items-center gap-3 w-full">
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Name</div>
                          <input type="text" v-model="temp_party.p_cp_2_name" />
                        </div>
                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Phone</div>
                          <input type="text" v-model="temp_party.p_cp_2_phone" />
                        </div>

                        <div class="w-full">
                          <div class="text-xs p-1 text-left">Email</div>
                          <input type="text" v-model="temp_party.p_cp_2_email" />
                        </div>
                      </div>
                    </div>

                    <div class="text-white mb-2">
                      <div class="text-xs p-1 text-left">Status</div>
                      <select v-model="temp_party.p_is_active" :selected="temp_party.p_is_active" type="select">
                        <option value="true">Active</option>
                        <option value>Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" v-show="edit_create == 'Create'" @click="post_data()"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Save</button>

              <button v-show="edit_create == 'Edit'" type="button" @click="edit_data(temp_party.p_uuid)"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Update</button>

              <button type="button" @click="party_popup('close')"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Popup -->
  </div>
</template>

<script>
var url = process.env.base_url

export default {
  data() {
    return {
      add_party_modal: false,
      password: '',
      edit_create: '',
      temp_party: {
        p_name: 'Manupal Choudhary',
        p_address_1: '',
        p_address_2: '',
        p_id_rccm: '',
        p_id_id: '',
        p_id_tva: '',
        p_id_nif: '',
        p_cp_1_name: '',
        p_cp_1_phone: '',
        p_cp_1_email: '',
        p_cp_2_name: '',
        p_cp_2_phone: '',
        p_cp_2_email: '',
        p_contacts_email: '',
        p_contacts_phone: '',
        p_contacts_fax: '',
        p_contacts_website: '',
        p_is_active: true,
      },
      parties: [{
        PARTY: "Loading..."
      }],
    }
  },
  mounted: function () {
    this.get_data() //method1 will execute at pageload
  },
  methods: {
    cons(x) {
      console.log(x)
    },
    party_popup(x, y, z) {
      if (x == 'show' && y == 'Create') {
        this.add_party_modal = true
        // this.temp_party = {}
        // this.temp_party.p_cp_1 = {}
        // this.temp_party.p_cp_2 = {}
        // this.temp_party.p_id = {}
        this.edit_create = y
      } else if (x == 'show' && y == 'Edit') {
        this.add_party_modal = true
        this.edit_create = y
        this.temp_party = z
        console.log(z)
      } else {
        this.add_party_modal = false
        this.edit_create = ''
        this.temp_party = {}
      }
    },

    get_data() {
      let self = this
      self.parties = [{
        PARTY: 'Loading...'
      }]
      // console.log('url is' + url)
      const axios = require('axios').default
      axios
        .post(self.$store.state.api_url, {
          data: self.$en({
            operation: 'sql',
            sql: 'select * from po.parties'
          })
        })
        .then(function (response) {
          console.log('this is party data', self.$de(response.data.data))
          self.parties = self.$de(response.data.data)
          console.log(self.parties)
          this.$mdtoast('This is a toast message!')
        })
        .catch(function (error) {
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

<style lang="postcss" scoped>
/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px grey;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c9c9c9;
}

input,
textarea,
select {
  @apply px-4 py-2 border text-gray-50 bg-gray-700 rounded-md w-full;
}

/* 
table th {
  @apply text-white text-lg p-2 border;
}

table td {
  @apply text-gray-200 text-xs py-1 border p-2;
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid rgb(138, 138, 138);
  padding: 10px;
}

table tr:nth-child(even) {
  background-color: #0c0c0c;
}

table tr:hover {
  background-color: #080808;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000000;
  color: white;
} */
</style>