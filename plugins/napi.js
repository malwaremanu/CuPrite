import axios from "axios"

import Vue from 'vue'
Vue.mixin({
    methods:{
        napi(url, data){
            let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": "Bearer " +  sessionStorage.getItem("operation_token") // "bWFsd2FyZW1hbnU6TWFudUBoeXBlcmRiMQ==" 
          }    
      
      let reqOptions = {
          url: this.$store.state.api_url + url,
          method: "POST",
          headers: headersList,
          data: JSON.stringify(data),
        }      
      let response = axios.request(reqOptions);      
      return response
        },
    }
})

// export default ({ url, data }, inject){  
//     let headersList = {
//         "Accept": "*/*",
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " +  sessionStorage.getItem("operation_token") // "bWFsd2FyZW1hbnU6TWFudUBoeXBlcmRiMQ==" 
//       }    
      
//       let reqOptions = {
//           url: $store.state.api_url + url,
//           method: "POST",
//           headers: headersList,
//           data: JSON.stringify(data),
//         }      
//       let response = axios.request(reqOptions);
//       console.log(response.data);  
//       return response
//   }  

// function n_connect(url, body){
//       let headersList = {
//         "Accept": "*/*",
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " +  sessionStorage.getItem("operation_token") // "bWFsd2FyZW1hbnU6TWFudUBoeXBlcmRiMQ==" 
//       }    
      
//       let reqOptions = {
//           url: $store.state.api_url + url,
//           method: "POST",
//           headers: headersList,
//           data: JSON.stringify(body),
//         }      
//       let response = axios.request(reqOptions);
//       console.log(response.data);  
//       return response
//   }
  
// export default n_connect;