<template>
  <div class="min-h-screen bg-gray-900 select-none">
    <div class="bg-gray-900 p-2 flex items-center">
      <button class="p-2 text-white text-center">
        <NuxtLink to="/masters">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </NuxtLink>
      </button>

      <div class="text-white p-2">
        <div class="text-lg font-semibold">Masters Page</div>
        <div class="text-xs">Company Registrations</div>
      </div>
    </div>

    <div class="text-white p-4">
      This is our company
    </div>

    <Footer />    
  </div>
</template>

<script>
var url = process.env.base_url

export default {
  data() {
    return {
      add_party_modal: false,
      password: '',
      edit_create: ''
    }
  },
  mounted: function () {
    console.log('---')
  },
  methods: {
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
    }    
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