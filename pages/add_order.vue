<template>
    <div class="min-h-screen select-none">
        <div class="p-2 flex items-center text-primary-600 dark:text-primary-600 dark:bg-gray-800">
            <button class="p-2  text-center">
                <NuxtLink to="/purchase">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </NuxtLink>
            </button>

            <div class="text-primary-600 p-2 text-primary-600 dark:text-primary-600 dark:bg-gray-800">
                <div class="text-lg font-semibold">Purchase Order</div>
                <div class="text-xs">Add New </div>
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
                    <div v-show="stage == 1">
                        <div class="p-4">
                            <label>PO Date </label>
                            <input type="date" v-model="data.date" />
                        </div>

                        <div class="p-4">
                            <label>Quote / Reference </label>
                            <input type="text" v-model="data.ref" />
                        </div>

                        <div class="p-4">
                            <label>From </label>
                            <select v-model="data.c">
                                <option v-for="c in companies" :key="c.id" :value="c.id">
                                    {{ c.name }}
                                </option>
                            </select>

                            <div class="hidden">
                                {{ companies }}
                            </div>
                        </div>
                        <div class="p-4">
                            <label>Choose Party </label>
                            <select v-model="data.p">
                                <option v-for="c in parties" :key="c.id" :value="c.id">
                                    {{ c.PARTY }}
                                </option>
                            </select>
                            <div class="hidden">
                                {{ parties }}
                            </div>
                        </div>
                        <div class="p-4">
                            <label>TVA Rates</label>
                            <select v-model="data.tva">
                                <option v-for="c in tva_rates" :key="c.id" :value="c.rate">
                                    {{ c.rate }}
                                </option>
                            </select>
                            <div class="hidden">
                                {{ tva_rates }}
                            </div>
                        </div>
                        <div class="p-4">
                            <label>Flat Discount or Remise ({{ data.discount }}%) </label>
                            <input type="number" v-model="data.discount" />
                        </div>
                    </div>

                    <div v-show="stage == 2">

                        <div class="overflow-x-auto relative">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="py-3 px-6">
                                            Part Number
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Description 
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            QTY
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Base Price
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Net Amount
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row"
                                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text">
                                        </th>
                                        <td class="py-4 px-6">
                                            <input type="text">
                                        </td>
                                        <td class="py-4 px-6">
                                            <input type="number"> <br>
                                            <select >
                                                <option value="KG">KG</option>
                                                <option value="NOS">NOS</option>
                                                <option value="LITRES">LITRES</option>
                                                <option value="CAN">CAN</option>
                                                <option value="OTHER">OTHER</option>                                                
                                            </select>
                                        </td>
                                        <td class="py-4 px-6">
                                            <input type="number">
                                        </td>
                                        <td class="py-4 px-6">
                                            <input type="number" value="">
                                        </td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>

                    </div>



                    <div class="p-4 flex items-center gap-2">
                        <button @click="add(data)" class="button"> {{ create }} </button>
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
            loading: false,
            stage: 1,
            add_party_modal: false,
            password: '',
            edit_create: '',
            addt: 'add',
            parties: {},
            companies: {},
            tva_rates: {},
            data: {},
            create: 'Create',
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
            self.loading = true
            axios
                .get("https://cupritev1.deta.dev/po_create")
                .then(function (response) {
                    self.parties = self.$de(response.data.data.parties)
                    self.companies = self.$de(response.data.data.companies)
                    self.tva_rates = self.$de(response.data.data.tva_rates)
                    self.loading = false
                    // if (self.$de(response.data.data).length == 0) {
                    //     alert('Please Add Parties/Companies First.')
                    //     self.$router.push('../')
                    // }
                    // else {
                    //     self.data = self.$de(response.data.data)
                    // }
                    // console.log(self.data)
                    // self.loading = false
                })
        },

        add(x) {
            this.create = "Creating..."
            this.stage = 2
            console.log(x)
        },

        cons(x) {
            console.log(x)
        },
    },
}
</script>