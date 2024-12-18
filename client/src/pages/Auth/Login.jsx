import React, { useState } from 'react'
import { ContainerAuth } from './components/ContainerAuth'
import { Input } from './components/Input'
import axios from 'axios';
import { setAuthToken } from '../../helper/auth';

const loginRequest = async ({username,password}) => {
   const user = {
      "emailOrUsername": username,
      "password":password
    }
    console.log(user)
   let data = JSON.stringify(user);

    const url = 'http://localhost:5000/auth/login'
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
      alert('ورود با موفقیت انجام شد')
    } catch (error) {
      alert('لاگین انجام نشد')
    }
    
}

export const Login = () => {
   const [state,setState] = useState({})
   const onChange = (e)=> {
      const {name,value} = e.target
      console.log(name,value)
      setState(prv=> {
         const upadtedState = {...prv}
         upadtedState[name] = value
         
         return upadtedState
      })
   }
   const onLoginHandler = () => {
      loginRequest(state)
   }
  return (

      <ContainerAuth
         title="ورود به سامانه"
         btnTitle="ورود"
         route={{
            to  : "/auth/register",
            title : "ثبت کاربر جدید در ساماانه"
         }}
         onSubmit={onLoginHandler}
         color="cyan"
      >
         <Input
            name="username"
            onChange={onChange} 
            title='نام کاربری'
            placeholder="نام کاربری خود را وارد کنید" 
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
