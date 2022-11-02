import axios from "axios";


class RestClient {



     static GetRequest(getURL){

       return axios.get(getURL)
             .then((response)=>{

                 return response.data;
             })
             .catch((error)=>{

                  return null;
             })



     }



     static PostRequest(postURL,postBody){

         let config = {
             headers:{ 'Content-Type': 'application/x-www-form-urlencoded' }
         }

         return axios.post(postURL,postBody,config)
             .then((response)=>{

                 return response.data;

         }).catch((error)=>{
             console.log(error);
             return null;
         });





     }









}

export default RestClient;