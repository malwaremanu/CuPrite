<template>
    <div class="bg-white dark:bg-gray-800 dark:text-gray-300 min-h-screen">
        <Bottombar />
        <div class="p-6">
            <div class="mx-auto">
                <div class="p-3 grid grid-cols-6 items-center gap-3 ">
                    <div>
                        <label for=""> Date </label>
                        <input type="date" v-model="f_data.date"/>
                        
                    </div>

                    <div>
                        <label for=""> &nbsp; </label>
                        <button @click="fetch_data(f_data.date)" class="button">Search </button>                        
                    </div>
                    
                    
                    <div>
                        <label for=""> &nbsp; </label>
                        <button @click="conso(f_data.date)" class="button"> Post to Console </button>                        
                    </div>
                </div>

            </div>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">

                <div v-show="loading_data">
                    <Isloading />
                </div>
                                
                <table v-show="!loading_data">
                    <thead>
                        <tr>
                            <th> Buyer </th>
                            <th> Average </th>
                            <th> Cu Grade </th>
                            <th> Cu % </th>
                            <th> Delivery Date & Time </th>
                            <th> Dispatch Id, Date & Time </th>
                            <th> Driver Name </th>
                            <th> Empty Weight Source </th>
                            <th> Fuel </th>
                            <th> Gross Weight Source </th>
                            <th> Net Weight </th>
                            <th> Net Weight Dest </th>
                            <th> KMs</th>
                            <th> Transporter </th>
                            <th> Truck No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-show="d_data.length >= 1" v-for="t in d_data" :key="t.uuid">
                            <td> {{ t.buyer }} </td>
                            <td> {{ t.average }} </td>
                            <td> {{ t.cu_grade }} </td>
                            <td> {{ t.cu_percentage }} </td>
                            <td> {{ t.del_data }} {{ t.del_time }} </td>
                            <td> {{ t.dispatch_id }} <hr> {{ t.dispatch_date }} {{ t.dispatch_time }} </td>
                            <td> {{ t.driver_name }} </td>
                            <td>{{ t.empty_weight_source }}</td>
                            <td>{{ t.fuel }}</td>
                            <td>{{ t.gross_weight_source }}</td>
                            <td>{{ t.net_weight }}</td>
                            <td>{{ t.net_weight_dest }}</td>
                            <td>{{ t.running_km }}</td>
                            <td> {{ t.transporter }}</td>
                            <td> {{ t.truck_no }}</td>
                        </tr>
                        
                        <tr v-show="d_data.length == 0">
                          <td colspan="15" class="text-center font-semibold"> 
                            Data not found. Please try with other parameters. 
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
import Isloading from '~/components/isloading.vue';
export default {
    data() {
        return {
            d_data: [
                {
                  uuid: "000f614f-c00e-404b-ae4f-48c469eefa8d",
                  average: null,
                  buyer: "VICENT MINING",
                  cu_grade: null,
                  cu_percentage: "3.00%",
                  del_date: null,
                  del_time: null,
                  dispatch_date: "29/08/2022",
                  dispatch_id: "Aug1089",
                  dispatch_time: null,
                  driver_name: "KALO",
                  empty_weight_source: 24250,
                  fuel: null,
                  gross_weight_source: 63620,
                  net_weight: 39370,
                  net_weight_dest: null,
                  remark: "Raw Material",
                  running_km: null,
                  station: "VICENT MINING",
                  tare_weight_dest: null,
                  total_weight_dest: null,
                  transporter: "SMCO TRANSPORT",
                  truck_no: "0627AS05",
                  truck_s_no: 23,
                  truck_symbol: "SHACMAN",
                  __createdtime__: 1663168359525,
                  __updatedtime__: 1663168359525
              },
              {
                  uuid: "000f614f-c00e-404b-ae4f-asd",
                  average: null,
                  buyer: "VICENT MINING",
                  cu_grade: null,
                  cu_percentage: "3.00%",
                  del_date: null,
                  del_time: null,
                  dispatch_date: "29/08/2022",
                  dispatch_id: "Aug1089",
                  dispatch_time: null,
                  driver_name: "KALO",
                  empty_weight_source: 24250,
                  fuel: null,
                  gross_weight_source: 63620,
                  net_weight: 39370,
                  net_weight_dest: null,
                  remark: "Raw Material",
                  running_km: null,
                  station: "VICENT MINING",
                  tare_weight_dest: null,
                  total_weight_dest: null,
                  transporter: "SMCO TRANSPORT",
                  truck_no: "0627AS05",
                  truck_s_no: 23,
                  truck_symbol: "SHACMAN",
                  __createdtime__: 1663168359525,
                  __updatedtime__: 1663168359525
              }
            ],
            f_data: {},
            loading_data : false,
            d_sample: {
                uuid: "000f614f-c00e-404b-ae4f-48c469eefa8d",
                average: null,
                buyer: "VICENT MINING",
                cu_grade: null,
                cu_percentage: "3.00%",
                del_date: null,
                del_time: null,
                dispatch_date: "29/08/2022",
                dispatch_id: "Aug1089",
                dispatch_time: null,
                driver_name: "KALO",
                empty_weight_source: 24250,
                fuel: null,
                gross_weight_source: 63620,
                net_weight: 39370,
                net_weight_dest: null,
                remark: "Raw Material",
                running_km: null,
                station: "VICENT MINING",
                tare_weight_dest: null,
                total_weight_dest: null,
                transporter: "SMCO TRANSPORT",
                truck_no: "0627AS05",
                truck_s_no: 23,
                truck_symbol: "SHACMAN",
                __createdtime__: 1663168359525,
                __updatedtime__: 1663168359525
            }
        };
    },
    methods: {
      conso(x){
        var d = x.split('-')
        var f = d[2] + '/' + d[1] + '/' + d[0]
        console.log(f)
      },
        fetch_data(x) {
            var d = x.split('-')
            var date = d[2] + '/' + d[1] + '/' + d[0]
            var year = "Y" + d[0]            
          
            const self = this
            self.loading_data = true
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Basic bWFsd2FyZW1hbnU6TWFudUBwcm9kMQ==");
            var raw = JSON.stringify({
                "operation": "sql",
                "sql": "SELECT * FROM dispatch." + year + " WHERE dispatch_date = '" + date + "' ORDER BY dispatch_id "
            });
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            fetch(self.$store.state.prod_hd, requestOptions)
                .then(response => response.text())
                .then(result => {
                    self.d_data = JSON.parse(result)
                    self.loading_data = false
                } )
                .catch(error => console.log("error", error));

            
        }
    },
    components: { Isloading }
}

</script>