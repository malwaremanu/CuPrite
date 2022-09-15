<template>
    <div class="bg-white dark:bg-gray-800 dark:text-gray-300 min-h-screen">
        <Bottombar />
        <div class="p-6">
            <div class="mx-auto">
                <div class="p-3 grid grid-cols-6 items-center gap-3 ">
                    <div>
                        <label for=""> Year </label>
                        <select v-model="f_data.year">
                            <option value="Y2020">2020</option>                            
                            <option value="Y2021">2021</option>                            
                            <option value="Y2022">2022</option>                            
                        </select>
                    </div>

                    <div>
                        <label for=""> Transporter </label>
                        <select v-model="f_data.transporter">
                            <option value="all">ALL</option>
                            <option value="SURYA LOGISTICS">SURYA LOGISTICS</option>
                        </select>
                    </div>

                    <div>
                        <label for=""> &nbsp; </label>
                        <button @click="fetch_data" class="button">Search </button>
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
                        <tr v-for="t in d_data" :key="t.uuid">
                            <td> {{ t.buyer }} </td>
                            <td> {{ t.average }} </td>
                            <td> {{ t.cu_grade }} </td>
                            <td> {{ t.cu_percentage }} </td>
                            <td> {{ t.del_data }} {{ t.del_time }} </td>
                            <td> {{ t.dispatch_id }} {{ t.dispatch_date }} {{ t.dispatch_time }} </td>
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
        fetch_data() {
            const self = this
            self.loading_data = true
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Basic bWFsd2FyZW1hbnU6TWFudUBwcm9kMQ==");
            var raw = JSON.stringify({
                "operation": "sql",
                "sql": "SELECT * FROM dispatch." + self.f_data.year + " WHERE transporter = '" + self.f_data.transporter + "' "
            });
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            fetch("https://prod-cuprite.harperdbcloud.com", requestOptions)
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