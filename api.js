// const axios = require('axios').default

// const instance = axios.create({
//     // baseURL: 'http://somebigurlhere',
//     method: 'post',
//     // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
//     baseURL : "https://6tv4vea5c9.execute-api.ap-south-1.amazonaws.com/",
//   }); 
  
// instance.interceptors.request.use(config => {
//     config.params = {
//      // add your default ones     
//      // spread the request's params
//       ...config.params,
//     };
//     return config;
//   });
  
//   export default instance; 

import axios from "axios";

async function postd(body){
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  sessionStorage.getItem("operation_token") // "bWFsd2FyZW1hbnU6TWFudUBoeXBlcmRiMQ==" 
      }    
      
      let reqOptions = {
        url: "https://6tv4vea5c9.execute-api.ap-south-1.amazonaws.com/",
        method: "POST",
        headers: headersList,
        data: JSON.stringify(body),
      }
      
      let response = await axios.request(reqOptions);
      console.log(response.data);
    
      return response.data
  }
  
export default postd;