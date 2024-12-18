import React, { useState } from 'react'
import { Input } from '../../../components/Input/Input'
import { TextArea } from '../../../components/Input/TextArea'
import { FileUpload } from '../../../components/Input/FileUpload'
import { Button } from '@mui/material'
import axios from 'axios'
import { getAuthToken } from '../../../helper/auth'

const createTourPage = async (state)=> {
  let data = JSON.stringify({...state});
  const url= 'http://localhost:5000/admin/tours'

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization':getAuthToken()
    },
  };
  
  try {
    const response = await axios.post(url,data,config)
    alert('تور ساخته شد')
  } catch (error) {
    alert('ساخت تور با مشکل واجه شد')
    
  }


}

export const TouresAdd = () => {
  const [state,setState] = useState()
  const onChange = (e)=> {
     const {name,value} = e.target
     setState(prv=> {
        const upadtedState = {...prv}
        upadtedState[name] = value

        return upadtedState
     })
  }
  const onCreate =() => {
    createTourPage(state)
  }

  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">تور جدید</h2>
      <div className='p-4'>
        <Input onChange={onChange} name="subject" title="نام تور" placeholder="عنوان تور را وارد کنید" />
        <Input onChange={onChange} name="start_date" type="date" title="تاریخ حرکت" placeholder="لطفا تاریخ حرکت را وارد کنید" />
        <Input onChange={onChange} name="end_date" type="date" title="تاریخ برگشت" placeholder="لظفا تاریخ برگشت را وارد کنید" />
        <Input onChange={onChange} name="leader_full_name" title="نام لیدر" placeholder="لطفا نام لیدر را وارد کنید" />
        <Input onChange={onChange} name="capacity" title="ظرفیت" placeholder="لطفا ظرفیت را وارد کنید" />
        <Input onChange={onChange} name="price" title="هزینه سفر" placeholder="لطفا هزینه سفر را وارد کنید" />
        <TextArea onChange={onChange} name="description" title="توضیحات"/>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <FileUpload title="عکس اصلی" />
          <FileUpload title="عکس های دیگر" />
        </div>
        <div className='text-left'>
          <Button onClick={onCreate} color='warning' type='submit' >افزودن</Button>
        </div>
      </div>
    </div>
  )
}
