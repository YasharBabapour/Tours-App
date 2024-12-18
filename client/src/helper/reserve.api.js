import axios from "axios";
import { getAuthToken } from "./auth";

const reqGetResarvations = async () => {

   const url = 'http://localhost:5000/reservations'

   const config = {
      headers: {
         'Authorization': getAuthToken()
      }
   };

   try {
      const res = await axios.get(url, config)
      return res.data
   } catch (error) {
      return {}
   }
}
const cancelTourRequest = async (reserveId) => {
   const url = `http://localhost:5000/reservations/${reserveId}`

   let config = {
      maxBodyLength: Infinity,
      headers: {
         'Authorization': getAuthToken()
      }
   };
   try {
      const res = await axios.delete(url, config)
      return res.data
   } catch (error) {
      return {}
   }

}

export const getUserReserves = async (userId) => {

   let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:5000/admin/reservations/users/${userId}`,
      headers: {
         'Authorization': getAuthToken()
      }
   };
   try {
      const result = await axios.request(config)
      return result.data
   } catch (error) {
      return null
   }

}

export const getTourReserves = async (tourId) => {
   let config = {
      method: 'get',
      url: `http://localhost:5000/admin/reservations/tours/${tourId}`,
      headers: {
         'Authorization': getAuthToken()
      }
   };
   try {
      const result = await axios.request(config)
      return result.data
   } catch (error) {
      return null
   }

}