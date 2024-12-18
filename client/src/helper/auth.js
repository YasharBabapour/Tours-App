import axios from "axios"

export const setAuthToken = (token) => {
   localStorage.setItem('access-token', token)
}

export const getAuthToken = () => {
   return localStorage.getItem('access-token')
}
export const clearToken = () => {
   const token = getAuthToken()
   localStorage.removeItem('access-token')
   return token
}
export const isAuthenticated = () => !!getAuthToken()

export const useUserProfile = () => {
   const strData = localStorage.getItem('user')
   const user = JSON.parse(strData)
   return user
}

export const setUserProfile = (userId, username, role) => {
   const user = {
      userId,
      username,
      role
   }
   const strData = JSON.stringify(user)
   localStorage.setItem('user', user)
}


export const geUserProfileRequest = async () => {
   const url = 'http://localhost:5000/auth/profile'
   let config = {
      method: 'get',
      headers: {
         'Authorization': getAuthToken()
      }
   };
   try {
      const res = await axios.get(url, config)
      return res.data.authenticated_profile
   } catch (error) {
      return null
   }

}