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

        <div class="text-primary-600 dark:text-primary-600 dark:bg-gray-800 px-4 min-h-screen">
            <div class="overflow-x-auto ">
                <div class="hidden">
                    {{ parties }}
                </div>

                <div v-show="loading">
                    <Isloading />
                </div>

                <div v-show="!loading">
                    <div v-show="stage == 1">
                        <div class="grid-2">
                            <div>
                                <label>PO Date </label>
                                <input type="date" v-model="data.date" />
                            </div>

                            <div>
                                <label>PO Number (Auto) </label>
                                <input type="text" v-model="data.id" readonly />
                            </div>

                        </div>

                        <div class="grid-2">
                            <div>
                                <label>Quote / Reference quote_ref </label>
                                <input type="text" v-model="data.quote_ref" />
                            </div>

                            <div>
                                <label>Quote / Reference Date </label>
                                <input type="date" v-model="data.quote_ref_date" />
                            </div>
                        </div>

                        <div class="grid-2">
                            <div>
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
                            <div>
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
                        </div>

                        <div class="grid-2">
                            <div>
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
                            <div>
                                <label>Flat Discount or Remise ({{ data.discount }}%) </label>
                                <input type="number" v-model="data.discount" />
                            </div>
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
                                            Description*
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            QTY* & Unit
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Base Price*
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Net Amount
                                        </th>
                                        <th scope="col" class="py-3 px-6">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(p,key) in sample_products" :key="p.id"
                                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row"
                                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <input type="text">

                                            <span class="text-xs hidden" v-text="uuidv4()"></span>
                                        </th>
                                        <td class="py-4 px-6">
                                            <input type="textarea" v-model="p.desc">
                                            <span v-show="!p.desc" class="text-red-700 text-xs"> required </span>
                                            
                                        </td>
                                        <td class="py-4 px-6">
                                          <div class="grid-2"
                                          > 
                                            <div> 
                                            <input type="number" class="appearance-none"    
                                                @keyup="p.total_amount = (parseFloat(p.base_price) * parseFloat(p.qty)).toFixed(2)"
                                                @keydown="p.total_amount = (parseFloat(p.base_price) * parseFloat(p.qty)).toFixed(2)"
                                                v-model="p.qty"> 
                                            <span v-show="!p.qty" class="text-red-700 text-xs"> required </span>                                            
                                          </div>
                                                
                                          <div> 
                                            <select v-model="p.unit">
                                                <option value="Kg">Kg</option>
                                                <option value="Nos">Nos</option>
                                                <option value="Litres">Litres</option>
                                                <option value="Barrel">Barrel</option>
                                                <option value="Can">Can</option>
                                                <option value="OTHER">OTHER</option>
                                            </select>
                                          </div>
                                          </div>
                                          
                                          
                                              
                                        </td>
                                        <td class="py-4 px-6">
                                            <input type="number" class="appearance-none"                                            
                                                @keyup="p.total_amount = (parseFloat(p.base_price) * parseFloat(p.qty)).toFixed(2)"
                                                @keydown="p.total_amount = (parseFloat(p.base_price) * parseFloat(p.qty)).toFixed(2)"
                                                v-model="p.base_price">
                                                <span v-show="!p.base_price" class="text-red-700 text-xs"> required </span>
                                        </td>
                                        <td class="py-4 px-6">
                                            <span class="text-lg text-primary-700 dark:text-gray-50"
                                                v-text="parseFloat(p.total_amount).toFixed(2)"></span>
                                        </td>
                                        <td class="py-4 px-6 w-30">
                                            <div v-show="sample_products.length-1 == key"
                                                class="flex flex-col">
                                                <button class="small-button" @click="add_new_product" v-show="(p.total_amount != NaN) && (p.total_amount >= 1) && (p.desc)">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                                    </svg> Add More
                                                </button>
                                                <button v-show="key != 0" class="small-button" @click="delete_product">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg> Remove </button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 p-3">
                                        <td class="py-4 px-6"> Products : {{ sample_products.length }} </td>
                                        <td class="py-4 px-6"></td>
                                        <td class="py-4 px-6"></td>
                                        <td class="py-4 px-6"></td>
                                        <td class="py-4 px-6 text-2xl text-primary-700 font-semibold">
                                            <span v-if="sample_products.length == 1"> 
                                              {{ (parseFloat(sample_products[0].total_amount)).toFixed(2) }}                                               
                                            </span>
                                            <span v-if="sample_products.length >= 2"> 
                                              {{ (sample_products.reduce((a,b) => (parseFloat(a.total_amount) + parseFloat(b.total_amount)))).toFixed(2) }} 
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <div>
                              {{ sample_products }}                              
                            </div>
                                        
                        </div>
                    </div>

                    <div class="p-4 flex items-center gap-2">
                        <button @click="add(data)" class="button"> {{ create }} </button>
                        <button class="button" @click="test_console(sample_products)"> Post to console </button>

                        <button class="button">
                            Calculate All
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
    
<script>
import Isloading from '~/components/isloading.vue'
var url = process.env.base_url
const axios = require('axios').default

export default {
    data() {
        return {
            loading: false,
            stage: 2,
            sample_products: [{
                id: this.uuidv4(),
                qty: '4',
                base_price: '6',
                total_amount: 24.000,
            }],

            addt: "add",
            parties: {},
            companies: {},
            tva_rates: {},
            data: {},
            create: "Add Products Now",
            ref_data: {
                id: 100,
                date: '',
                discount: '',
                from: 'suryamines',
                gross_total: '',
                party: null,
                quote_ref: '',
                quote_ref_date: '',
                remark: '',
                total_amount: '',
                tva_amount: '',
                tva_rate: '',
                type: 'purchase',
                __createdtime__: 1662989993547,
                __updatedtime__: 1662990610895
            },
            
        };
    },
    mounted: function () {
        // this.get_data(); //method1 will execute at pageload
    },
    methods: {
        test_console(x) {
            console.clear()
            console.log(x)
        },
        
        uuidv4() {
            const d = new Date();
            var aa = d.getDay() + "" + d.getMonth() + "" + d.getFullYear() + '' + d.getSeconds() + "" + d.getMilliseconds();

            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11 + aa).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(20)
            );
        },
        add_new_product() {
            console.log('adding new')
            this.sample_products.push({
                id: this.uuidv4(),
                total_amount: 0,
            })
        },

        delete_product() {
            this.sample_products.pop()
        },

        cons(x) {
            console.log(x);
        },
        get_data() {
            let self = this;
            self.loading = true;
            axios
                .get("https://cupritev1.deta.dev/po_create")
                .then(function (response) {
                    self.parties = self.$de(response.data.data.parties);
                    self.companies = self.$de(response.data.data.companies);
                    self.tva_rates = self.$de(response.data.data.tva_rates);
                    self.loading = false;
                    // if (self.$de(response.data.data).length == 0) {
                    //     alert('Please Add Parties/Companies First.')
                    //     self.$router.push('../')
                    // }
                    // else {
                    //     self.data = self.$de(response.data.data)
                    // }
                    // console.log(self.data)
                    // self.loading = false
                });
        },
        add(x) {
            this.create = "Create";
            this.stage = 2;
            console.log(x);
        },
        cons(x) {
            console.log(x);
        },
    },
    components: { Isloading }
}
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
