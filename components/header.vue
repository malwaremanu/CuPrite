<template>
<div>
<div class="flex items-center justify-between py-4 text-gray-800 p-2">
    <div>
      <NuxtLink to="/">
        <img src="~/assets/logo-hrms.png" class="h-10" />
      </NuxtLink>      
    </div>        

      <div class="font-semibold">
        <NuxtLink to="/login">Login </NuxtLink>
      </div>

    </div>


  <div class="bg-gray-900 text-white text-center p-8 font-semibold" >
    {{ title }}
  </div>
</div>

  
</template>

<script>
export default {
  props: [
    'title'
  ],
    data(){
      return {
        title: 'Hello Vue again!'
      }
    },
    methods : {
     
    }

}
</script>