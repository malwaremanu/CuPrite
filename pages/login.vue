<template>
    <div class="min-h-screen bg-ibps-900" >  

         <button class="p-4 text-white text-center">
            <nuxt-link to="/">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path></svg>
            </nuxt-link>    
        </button>


        <center class="py-5 mt-14 p-2">            
            <Logo class="py-2 "/>
            <br>
            <div class="font-semibold text-center text-white text-xl"> 
                IBPS Madad 
            </div>
        </center>    
        
        <div class="px-8 bg-white font-semibold rounded-t-md">            
            <div class="text-ibps-900 text-center py-2 text-xl"> Login to IBPS Madad </div>
        
            <div class="py-2">
                <div class="text-gray-400"> Email ID </div>                
                <input type="text" class="px-4 py-2 border border-gray-400 rounded-lg w-full" />
            </div>

            <div class="py-2">
                <div class="text-gray-400"> Password </div>       
                <input type="password" class="px-4 py-2 border border-gray-400 rounded-lg w-full" />
                <div class="text-right">
                    <span class="text-gray-400 hover:text-ibps-900 font-light cursor-pointer"> reset password ?  </span>                    
                </div>                
            </div>

            <div class="py-2">
                <Buttonprimary title="Login" /> 
            </div>
            
            <div class="py-2">
                <Buttonprimary title="Register" /> 
            </div>
        </div>

        <div class="text-center text-xs font-semibold py-8 text-white">
            Ver 0.0.1 Beta
        </div>
            
        
    </div>
</template>

<script>
// import LogoSVG from '../assets/logo'

// export default {
//     components : [ LogoSVG ]
// }
</script>