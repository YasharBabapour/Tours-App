import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getAuthToken } from '../../../helper/auth';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const reqUserList = async (page = 1,size = 10) => {

  page = page ?? 1
  size = size ?? 10

  const url = `http://localhost:5000/admin/reservations?page=${page}&size=${size}`
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



export const ReservesListPage = ({tourdid}) => {
  const [data,setData] = useState([])
 
  const loadData = async () => {
    try {
      const data = await reqUserList()
      setData(data.data)   
    } catch (error) {
    }

  } 

  useEffect(()=>{
    loadData()
  },[])
  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">لیست رزرو ها</h2>
      <TableContainer style={{marginTop:40}} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell style={{background:"black" ,color:"white"}} align="center">ایدی تور</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">ایدی کاربر</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">نام ثبت نام کننده</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">تعداد بلیت</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">کا هزینه ها</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                align="center"
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  <NavLink to={`/admin/tours/${row.tour_id}/view`}>{row.tour_id}</NavLink>
                </TableCell>
                <TableCell align="center">
                  <NavLink to={`/admin/tours/profile/${row.user_id}`}>{row.user_id}</NavLink>
                </TableCell>
                <TableCell align="center">{row.name_of_registrant}</TableCell>
                <TableCell align="center">{row.counts}</TableCell>
                <TableCell align="center">{row.total_cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
