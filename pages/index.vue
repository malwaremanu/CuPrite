<template>
    <div class="p-2 min-h-screen bg-ibps-900">    
        <center class="py-5 mt-14">
            
            <Logo />

            <br>

            <div class="font-semibold text-center text-white text-xl"> 
                IBPS Madad 
            </div>
        </center>    
        
    <div class="p-2  flex flex-col gap-4">
        <nuxt-link to="/login"> <Buttonsecondary title="Login" /> </nuxt-link>
        <nuxt-link to="/register"> <Buttonsecondary title="Register" /> </nuxt-link>   
    </div>

    <div class="text-center text-xs font-semibold py-8 text-white">
        Ver 0.0.1 Beta
    </div>
    
    <!--         
        <button class="p-4 text-white text-center">
            <nuxt-link to="/">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
            </nuxt-link>    
        </button> 
    -->

    </div>
</template>

<script>

export default {
    
}
</script>