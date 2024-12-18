import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { Input } from '../../../components/Input/Input';
import { getUserByID, updateUserByID } from '../../../helper/user.api';
import { Button } from '@mui/material';


export const UserUpdateProfile = () => {
  const [user,setUser] = useState()
  const [loading,setLoading] = useState(true)
  const params = useParams()
  const userId = params.userId
  
  const loadData = () => {
    setLoading(true)
    const data = getUserByID(userId)
    setLoading(false)
    setUser(data)
  }

  const onChange = (e)=> {
    const {name,value} = e.target
    setUser(prv=> {
       const upadtedState = {...prv}
       upadtedState[name] = value
       
       return upadtedState
    })
 }

  const onEditHandler = async ()=> { 
    const result = await updateUserByID(userId,user)
    if(!result) {
      alert('کاربر ویرایش نشد')
      return
    }
    setUser(result)
    alert('کاربر با موفقیت ویرایش شد')
  }
  useEffect(()=>{
    loadData()
  },[])


  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">کاربر جدید</h2>
      <div className='p-4'>
        <Input onChange={onChange} name='username' title="نام کاربری" placeholder="لطفا نام کاربری را وارد کنید" />
        <Input onChange={onChange} name='email'  title="ایمیل" placeholder="لطفا ایمیل را وارد کنید" />
        <div>
          <Input onChange={onChange} name="role" title="ادمین"  type="checkbox" id='role'  />
          {/* <label htmlFor="role"></label> */}
        </div>
        <Input onChange={onChange} name="password" title="رمز عبور" placeholder="لطفا نقش کاربر را وارد کنید" />
        <div className='text-left py-5'>
          <Button onClick={onEditHandler}  color='success' type='submit' >ثبت</Button>
        </div>
      </div>
    </div>
  )
}
