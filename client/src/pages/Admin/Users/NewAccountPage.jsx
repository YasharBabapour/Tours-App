import React, { useState } from 'react'
import { Input } from '../../../components/Input/Input'
import { Button } from '@mui/material'
import axios from 'axios'
import { getAuthToken } from '../../../helper/auth'

const newAccountRequest = async ({
  username,
  email,
  password,
  role,
})=> {
  let data = JSON.stringify({
    "username": username,
    "email": email,
    "password":password,
    "role": role ? "ADMIN":"USER"
  });
  const url= 'http://localhost:5000/admin/users/'
  let config = {
    maxBodyLength: Infinity,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization':getAuthToken()
    },
  };

  try {
    const response = await axios.post(url,data,config)
    alert('کاربر جدید با موفقیت ایجاد شذ')
  } catch (error) {
    alert(error.message ?? 'کاربر ایجاد نشد')
  }

}
export const NewAccountPage = () => {
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
  const onCreateHandler = () => {

    newAccountRequest(state)
  }
  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">کاربر جدید</h2>
      <div className='p-4'>
        <Input onChange={onChange} name='username' title="نام کاربری" placeholder="لطفا نام کاربری را وارد کنید" />
        <Input onChange={onChange} name='email'  title="ایمیل" placeholder="لطفا ایمیل را وارد کنید" />
        <div>
          <input onChange={onChange} name="role" type="checkbox" id='role'  />
          <label htmlFor="role">ادمین</label>
        </div>
        <Input onChange={onChange} name="password" title="رمز عبور" placeholder="لطفا نقش کاربر را وارد کنید" />
        <div className='text-left py-5'>
          <Button onClick={onCreateHandler}  color='success' type='submit' >ثبت</Button>
        </div>
      </div>
    </div>
  )
}
