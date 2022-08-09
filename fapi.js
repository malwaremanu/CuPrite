
import axios from "axios";

function fast_connect(body){
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
      
      let response = axios.request(reqOptions);
      console.log(response.data);
    
      return response.data
  }
  
export default fast_connect;