import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserTableSetting } from './components/UserTableSetting';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {  Button } from '@mui/material';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { getAuthToken } from '../../../helper/auth';
import { CenterTitle } from '../../../components/title/CenterTitleHead';

const reqUserList = async (page = 1,size = 10) => {

  page = page ?? 1
  size = size ?? 10

  const url = `http://localhost:5000/admin/users?page=${page}&size=${size}`
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
    const userId = user._id;
    const username = user.username;
    const role = user.role === "ADMIN" ? "ادمین" : "کاربر";
    const email = user.email;
    return {
      userId,
      username,
      email,
      role,
    }
  })
}
export const UsersListPage = () => {
  const [users,setTours] = useState([])
  const [paginate,setPaginate] = useState(null)
  const [endLoad,setEndLoad] = useState(false)
  const loadData = async ()=> {
    const page = paginate ? paginate.currentPage + 1 : 1
    const result = await reqUserList(page,10)
    setPaginate(result)
    const _user = normalizeUsersDate(result.data)
    setTours(u=> _user ? [...u,..._user] : u)

  }
  useEffect(()=>{
    if(paginate && paginate.totalPages <= paginate.currentPage) {
      setEndLoad(true)
    }
  },[paginate])
  useEffect(()=>{
    loadData()
  },[])
  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">لیست کاربران</h2>
      <div className='text-left'>
        <Button LinkComponent={NavLink} to='/admin/users/new'  color='secondary' >افزودن کاربر جدید</Button>
      </div>
      <TableContainer style={{marginTop:40}} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow >
              <TableCell style={{background:"black" ,color:"white"}} align="center">نام کاربری</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">رایان نامه</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">نقش کاربر</TableCell>
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">مدیریت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                align="center"
                key={row.username}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.username}
                </TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="center">{UserTableSetting({userId:row.userId,reload:loadData})}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!endLoad && (<CenterTitle title={<Button onClick={loadData}>بیشتر</Button>} />) }
    </div>
  )
}
