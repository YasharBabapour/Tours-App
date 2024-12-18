import React, { useState } from 'react'
import { ContainerAuth } from './components/ContainerAuth'
import { Input } from './components/Input'
import axios from 'axios'
import { setAuthToken } from '../../helper/auth'

const registerRequest = async ({username,email,password}) => {
   const user = {
      "username": username,
      "email": email,
      "password":password
    }
   let data = JSON.stringify(user);

    const url = 'http://localhost:5000/auth/sign-up'
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      headers: { 
        'Content-Type': 'application/json'
      },
    };
    
    try {
      const res = await axios.post(url,data,config)
      setAuthToken(res.data.token)
      alert('ثبت نام با موفقیت انجام شد')
    } catch (error) {
      alert('ثبت نام انجام نشد')
    }
    
}

export const Register = () => {
   const [state,setState] = useState({})
   const onChange = (e)=> {
      const {name,value} = e.target
      setState(prv=> {
         const upadtedState = {...prv}
         upadtedState[name] = value
         
         return upadtedState
      })
   }
   const onLoginHandler = () => {
      registerRequest(state)
   }
  return (
   <ContainerAuth
   title="کاربر جدید"
   btnTitle="ثبت"
   route={{
      to  : "/auth/login",
      title : "ورود به سامانه با حساب کاربری"
   }}
   onSubmit={onLoginHandler}
   color="cornflowerblue"
>
         <Input
            name="username"
            onChange={onChange} 
            title='نام کاربری'
            placeholder="نام کاربری خود را وارد کنید" 
         />
         <Input
                     name="email"
                     onChange={onChange} 
         title='ایمیل'
         placeholder="ایمیل خود را وارد کنید" 
         />
         <Input 
            name="password"
            onChange={onChange} 
            title='رمزعبور'
            placeholder="رمزعبور خود را وارد کنید" 
         />


</ContainerAuth>
  )
}
