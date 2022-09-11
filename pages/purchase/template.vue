<template>
    <div class="bg-gray-900 min-h-screen">
      <Bottombar />
  
      <div class="flex">
        <Sidebar />
        
        <div class="w-full">
          asd  
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import Isloading from '../../components/isloading.vue'
  import { EyeIcon } from '@vue-hero-icons/outline'
  import Bottombar from '~/components/bottombar.vue'
  import Sidebar from '../../components/purchase/sidebar.vue'
  
  export default {
    data() {
      return {        
                
      }
    },
    mounted() {      
      window.scrollTo(0,0)
    },
    methods: {      
      
    },
    components: { Isloading, EyeIcon, Bottombar, Sidebar },
  }
  </script>