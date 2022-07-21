<template>
  <div class="p-2 min-h-screen bg-gray-900 select-none">
    <div class="bg-gray-900">
      <button class="p-4 text-white text-center">
        <NuxtLink to="/">
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
        </NuxtLink>
      </button>
    </div>

    <p class="text-white p-2 text-xl">Masters Page</p>

    <div class="text-white p-4">
      <div class="flex justify-between p-2 items-center">
        <div class="text-lg">Adding parties</div>
        <div>
          <div class="p-2 text-gray-900">
            <button
              @click="party_popup('show', 'Create')"
              class="flex items-center gap-1 font-semibold bg-white px-4 py-2 rounded-full hover:bg-slate-100 active:bg-slate-200"
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
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>

              <span>Add New Party</span>
            </button>
          </div>
        </div>
      </div>

      <div class="p-4 overflow-x-auto">
        <button @click="get_data">Refresh Data</button>
        <table class="w-full">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Under Company</th>
            <th>Added By</th>
            <th>Action</th>
          </tr>

          <tr v-for="party in parties" :key="party.p_uuid">
            <td>
              {{ party.p_name }}
              <i v-show="!party.p_is_active" class="text-red-300">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </i>
            </td>
            <td>{{ party.p_address }}</td>
            <td>{{ party.p_email }}</td>
            <td>{{ party.p_company }}</td>
            <td>
              {{ party.p_author }}
              <br />
              {{ party.p_date }}
            </td>
            <td>
              <button @click="delete_data(party.p_uuid)">
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
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>

              <button @click="party_popup('show', 'Edit', party)">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <Footer />

    <!-- Popup -->
    <div
      v-show="add_party_modal"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
        >
          <div
            class="relative bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
          >
            <div class="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-600 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <!-- Heroicon name: outline/exclamation -->
                  <svg
                    class="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-medium text-gray-300"
                    id="modal-title"
                  >{{ edit_create }} Party</h3>
                  <div class="mt-2">
                    <div class="text-sm text-gray-500">
                      <div class="text-white mb-2">
                        <label class="text-xs p-1 text-left">Name</label>
                        <input
                          type="text"
                          v-model="temp_party.p_name"
                          class="px-4 py-2 border text-gray-50 bg-gray-700"
                        />
                      </div>

                      <div class="text-white mb-2">
                        <label class="text-xs p-1 text-left">Address</label>
                        <textarea
                          v-model="temp_party.p_address"
                          class="px-4 py-2 border text-gray-50 bg-gray-700 w-full rounded-md"
                        ></textarea>
                      </div>

                      <div class="text-white mb-2">
                        <label class="text-xs p-1 text-left">Author</label>
                        <input
                          type="text"
                          v-model="temp_party.p_author"
                          class="px-4 py-2 border text-gray-50 bg-gray-700"
                        />
                      </div>

                      <div class="text-white mb-2">
                        <label class="text-xs p-1 text-left">Email</label>
                        <input
                          type="text"
                          v-model="temp_party.p_email"
                          class="px-4 py-2 border text-gray-50 bg-gray-700"
                        />
                      </div>

                      <div class="text-white mb-2">
                        <label class="text-xs p-1 text-left">Company</label>
                        <input
                          type="text"
                          v-model="temp_party.p_company"
                          class="px-4 py-2 border text-gray-50 bg-gray-700"
                        />
                      </div>

                      <div class="text-white mb-2">
                        <label class="text-xs p-1 text-left">Status</label>
                        <select
                          v-model="temp_party.p_is_active"
                          :selected="temp_party.p_is_active"
                          type="select"
                          class="px-4 py-2 border text-gray-50 bg-gray-700 rounded-md"
                        >
                          <option value="true">Active</option>
                          <option value>Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                v-show="edit_create == 'Create'"
                @click="post_data()"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
              >Save</button>

              <button
                v-show="edit_create == 'Edit'"
                type="button"
                @click="edit_data(temp_party.p_uuid)"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
              >Update</button>

              <button
                type="button"
                @click="party_popup('close')"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Popup -->
  </div>
</template>

<script>
var url = 'https://c.suryamines.com/cuprite/'
export default {
  data() {
    return {
      add_party_modal: false,
      password: '',
      edit_create: '',
      temp_party: {
        p_name: '',
        p_address: '',
        p_author: '',
        p_email: '',
        p_date: '',
        p_company: '',
        p_is_active: false,
      },
      parties: [],
    }
  },
  mounted: function () {
    this.get_data() //method1 will execute at pageload
  },
  methods: {
    party_popup(x, y, z) {
      if (x == 'show' && y == 'Create') {
        this.add_party_modal = true
        this.temp_party = {}
        this.edit_create = y
      } else if (x == 'show' && y == 'Edit') {
        this.add_party_modal = true
        this.edit_create = y
        this.temp_party = z
      } else {
        this.add_party_modal = false
        this.edit_create = ''
        this.temp_party = {}
      }
    },

    get_data() {
      let self = this
      const axios = require('axios').default
      axios
        .get(url + 'masters/parties')
        .then(function (response) {
          console.log('this is response', response.data.msg)
          self.parties = response.data
          console.log(response)
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
          console.log('this is response', response.data)
          axios
            .get(url + 'masters/parties')
            .then(function (response) {
              console.log('this is response', response.data.msg)
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
      axios
        .post(url + 'masters/parties', {
          p_name: this.temp_party.p_name,
          p_address: this.temp_party.p_address,
          p_author: this.temp_party.p_author,
          p_is_active: Boolean(this.temp_party.p_is_active),
          p_email: this.temp_party.p_email,
          p_company: this.temp_party.p_company,
        })
        .then(function (response) {
          console.log('this is response', response.data.msg)
          self.popup_msg = response.data.msg
          axios
            .get(url + 'masters/parties')
            .then(function (response) {
              console.log('this is response', response.data.msg)
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
        .put(url + 'masters/parties/' + puuid, {
          p_uuid: puuid,
          p_name: this.temp_party.p_name,
          p_address: this.temp_party.p_address,
          p_author: this.temp_party.p_author,
          p_is_active: Boolean(this.temp_party.p_is_active),
          p_email: this.temp_party.p_email,
          p_company: this.temp_party.p_company,
        })
        .then(function (response) {
          console.log('this is response', response.data.msg)
          self.popup_msg = response.data.msg

          if (response.status == 200) {
            axios
              .get(url + 'masters/parties')
              .then(function (response) {
                console.log('this is response', response.data.msg)
                self.parties = response.data
                self.add_party_modal = false
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
          }
          else {
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

input {
  @apply border border-gray-400 w-full rounded-md py-2 px-3 text-sm;
}

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
  border: 1px solid #ddd;
  padding: 10px;
}

table tr:nth-child(even) {
  background-color: #1b1b1b;
}

table tr:hover {
  background-color: #1f1f1f;
}

table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #000000;
  color: white;
}
</style>