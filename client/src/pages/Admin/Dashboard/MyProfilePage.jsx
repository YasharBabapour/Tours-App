import React, { useEffect, useState } from 'react'
import { Input } from '../../../components/Input/Input'
import { Button } from '@mui/material'
import { updateUserProfile } from '../../../helper/user.api'
import { geUserProfileRequest } from '../../../helper/auth'

export const MyProfilePage = () => {
  const [state,setState] = useState( {
    "username": "",
    "email": "",
    "password":"",
    "role":""
  });

  const onChange = (e)=> {
    const {name,value} = e.target
    setState(prv=> {
       const upadtedState = {...prv}
       upadtedState[name] = value

       return upadtedState
    })
 }
  const onEditProfile = async () => {
    let data = {
      "username": state.username,
      "email": state.email,
      "password":state.password,
    };
    await updateUserProfile(data)
  }
  const loadData  = async () => {
      const profile = await geUserProfileRequest()
      if(profile)
      {
        setState(prev => ({
          ...prev,
          "username":profile.username,
          "email":profile.email,
        }))
      }
  } 
  useEffect(()=>{
    loadData()
  },[])
  const isAdmin = state.role == "ADMIN"
  console.log(state,isAdmin)
  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">پروفایل من</h2>
      <div className='p-4'>
        <Input onChange={onChange} value={state.username} name="username"  title="نام کاربری" placeholder="لطفا نام کاربری را وارد کنید" />
        <Input onChange={onChange} value={state.email} name="email" title="ایمیل" placeholder="لطفا ایمیل را وارد کنید" />
        <Input onChange={onChange} value={state.password} name="password" title="رمز عبور" placeholder="لطفا رمز عبور را وارد کنید" />
        <div className='text-left py-5'>
          <Button onClick={onEditProfile} color='success' type='submit' >,ویرایش</Button>
        </div>
      </div>
    </div>
  )
}
