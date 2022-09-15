<template>
    <div class="bg-white dark:bg-gray-800 dark:text-gray-300 min-h-screen">
        <Bottombar />
        <div class="p-6">
            <div class="mx-auto">
                <div class="p-3 grid grid-cols-6 items-center gap-3 ">
                    <div>
                        <label for=""> Year </label>
                        <input type="text">
                    </div>

                    <div>
                        <label for=""> Party </label>                        
                        <select>
                            <option value="all">ALL</option>
                        </select>
                    </div>

                    <div>
                        <label for=""> &nbsp; </label>
                        <button class="button">Search </button>
                    </div>
                </div>

            </div>

            <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table>
                    <thead>
                        <tr>
                            <th> Buyer </th>
                            <th> Transporter </th>
                            <th> asd </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 2020 </td>
                            <td> 2021 </td>
                            <td> 2022 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            d_data: {},
            d_sample: {
                uuid: '000f614f-c00e-404b-ae4f-48c469eefa8d',
                average: null,
                buyer: 'VICENT MINING',
                cu_grade: null,
                cu_percentage: '3.00%',
                del_date: null,
                del_time: null,
                dispatch_date: '29/08/2022',
                dispatch_id: 'Aug1089',
                dispatch_time: null,
                driver_name: 'KALO',
                empty_weight_source: 24250,
                fuel: null,
                gross_weight_source: 63620,
                net_weight: 39370,
                net_weight_dest: null,
                remark: 'Raw Material',
                running_km: null,
                station: 'VICENT MINING',
                tare_weight_dest: null,
                total_weight_dest: null,
                transporter: 'SMCO TRANSPORT',
                truck_no: '0627AS05',
                truck_s_no: 23,
                truck_symbol: 'SHACMAN',
                __createdtime__: 1663168359525,
                __updatedtime__: 1663168359525
            }
        }
    },
    methods: {
        fetch_data() {
            console.log('asd')
        }
    }
}

</script>