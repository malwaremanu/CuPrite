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
        <div class="text-xs">Employees Database</div>
      </div>
    </div>

    <div class="p-1 overflow-x-auto">
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-sm text-gray-200 uppercase bg-gray-900 border border-gray-700">
              <tr>
                <th v-for="header in emp_headers" :key="header.id" scope="col" class="py-3 px-6">
                    {{ header.label }}
                </th>                
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="emp in emps"
                :key="emp.c[1]"
                class="bg-gray-800 text-gray-300 border-b"
              >
                <td v-for="e in emp.c" :key="e"
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"                  
                > 
                   
                  <!-- <br />
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
                  </i> -->
                  
                  <div class="text-gray-300 text-xs ">
                    {{ getValue(e,'v') }}
                  </div> 
                  
                 </td>
                <!-- <td class="py-4 px-6">
                   {{ emp }} 
                </td>  -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import parseJson from 'parse-json';
var sheet_id = "1GxrwkN0KPbcSFBL8iL-SWg874MTEf2wdDtPcTOZywZ0"
var sheet_name = "Database"

var url = "https://docs.google.com/spreadsheets/d/"+ sheet_id +"/gviz/tq?sheet=" + sheet_name + "&tq="

export default {
  data() {
    return {
      add_party_modal: false,
      password: '',
      edit_create: '',
      emp_headers: [],
      emps: [],
    }
  },
  mounted: function () {
    this.get_data() //method1 will execute at pageload
  },
  methods: {
    containsKey(obj, key ) {
        if(obj){
            return Object.keys(obj).includes(key);

        }
        return ''            
        },

    getValue(x,y){
      if(this.containsKey(x,'f')){
            return x['f']
        }
        
        if(this.containsKey(x,y)){
            return x[y]
        }
        return ''
    },
    get_data(x) {
      console.log(x)
      let self = this

        axios.get(url + 'select *')
        .then(function (response) {
        // JSON.parse(rep.substring(47).slice(0, -2));
        var gdata = parseJson(response.data.substring(47).slice(0, -2))            
          console.log('this is get data', parseJson(response.data.substring(47).slice(0, -2)))
          self.emp_headers = gdata.table.cols
          self.emps = gdata.table.rows
          console.log(gdata.table.cols)                  
        })
        .catch(function (error) {
          console.log(error)
        })

    }
  }
}
</script>