import axios from "axios";
import { getAuthToken } from "./auth";

export const getTourById = async (tourId) => {
   let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:5000/admin/tours/${tourId}`,
      headers: {
         'Authorization': getAuthToken()
      }
   };

   try {
      const ret = await axios.request(config)
      return ret.data
   } catch (error) {
      return false
   }

}

export const deleteTourById = async (tourId) => {

   let config = {
      method: 'delete',
      url: `http://localhost:5000/admin/tours/${tourId}`,
      headers: {
         'Authorization': getAuthToken()
      }
   };

   try {
      const ret = await axios.request(config)
      console.log(ret.data)
      return ret.data
   } catch (error) {
      return false
   }

}