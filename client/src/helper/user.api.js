import axios from "axios";
import { getAuthToken } from "./auth";

export const getUserByID = async (userId) => {
   let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:5000/admin/users/${userId}`,
      headers: {
         'Authorization': getAuthToken(),
      }
   };

   try {
      const result = await axios.request(config)
      return result.data
   } catch (error) {
      return null
   }

}

export const updateUserByID = async (userId, user) => {
   let data = JSON.stringify(user);

   let config = {
      method: 'put',
      url: `http://localhost:5000/admin/users/${userId}`,
      headers: {
         'Authorization': getAuthToken(),
         'Content-Type': 'application/json'
      },
      data: data
   };

   try {
      const result = await axios.request(config)
      return result.data
   } catch (error) {
      return null
   }

}
export const updateUserProfile = async (user) => {
   let data = JSON.stringify(user);

   let config = {
      method: 'put',
      url: `http://localhost:5000/admin/users/profile`,
      headers: {
         'Authorization': getAuthToken(),
         'Content-Type': 'application/json'
      },
      data: data
   };

   try {
      const result = await axios.request(config)
      return result.data
   } catch (error) {
      return null
   }

}
export const deleteUserById = async (userId) => {

   let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `http://localhost:5000/admin/users/${userId}`,
      headers: {
         'Authorization': getAuthToken(),
         'Content-Type': 'application/json'
      }
   };

   try {
      await axios.request(config)
      return true
   } catch (error) {
      return false
   }

}

