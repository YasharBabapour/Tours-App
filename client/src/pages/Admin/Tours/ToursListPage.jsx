import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { TourTableSetting,  } from './components/TourTableSetting';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { getAuthToken } from '../../../helper/auth';

const reqUserList = async (page = 1,size = 10) => {

  page = page ?? 1
  size = size ?? 10

  const url = `http://localhost:5000/admin/tours?page=${page}&size=${size}`
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization':getAuthToken()
    },
  };

  try {
    const result = await axios.get(url,config)
    return result.data
  } catch (error) {
    console.log(error)
    return null
  }
}


export const normalizeUsersDate = (users=[])=> {
  return users.map((user)=>{
    const tourId = user._id;
    const leader_full_name = user.leader_full_name;
    const subject = user.subject;
    const start_date = user.start_date;
    const end_date = user.end_date;
    const capacity = user.capacity;
    return {
      tourId,
      leader_full_name,
      subject,
      start_date,
      end_date,
      capacity,
      setting:TourTableSetting({tourId})
    }
  })
}
export const ToursListPage = () => {
  const [data,setData] = useState([])
  
  const loadData = async () => {
    try {
      const data = await reqUserList()
      setData(normalizeUsersDate(data.tours))   
    } catch (error) {
    }

  } 

  useEffect(()=>{
    loadData()
  },[])
  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">لیست تور ها و سفر ها</h2>
      <div className='text-left'>
        <Button LinkComponent={NavLink} to='/admin/tours/add'  color='secondary' >افزودن تور جدید</Button>
      </div>
      <TableContainer style={{marginTop:40}} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell style={{background:"black" ,color:"white"}} align="center">نام لیدر</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">عنوان</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">تاریخ حرکت</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">تاریخ برگشت</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">ضرفیت</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">مدیریت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                align="center"
                key={row.tourId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.leader_full_name}
                </TableCell>
                <TableCell align="center">{row.subject}</TableCell>
                <TableCell align="center">{row.start_date}</TableCell>
                <TableCell align="center">{row.end_date}</TableCell>
                <TableCell align="center">{row.capacity}</TableCell>
                <TableCell align="center">{TourTableSetting({tourId:row.tourId,reload:loadData})}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
