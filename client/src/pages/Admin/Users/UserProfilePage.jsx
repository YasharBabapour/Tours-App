import React, { useEffect, useState } from 'react'
import { getUserByID, updateUserByID } from '../../../helper/user.api';
import { Button } from '@mui/material';
import { KeyValueItem } from '../../../components/KeyValueItem/KeyValueItem';
import { NavLink, useParams } from 'react-router-dom/cjs/react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getUserReserves } from '../../../helper/reserve.api';


export const UserProfilePage = (props) => {
  const [user,setUser] = useState()
  const [loading,setLoading] = useState(true)
  const [reservations,setReservations] = useState(null)
  const params = useParams()
  const userId = params.userId

  const loadData = async () => {
    setLoading(true)
    const data = await getUserByID(userId)
    setLoading(false)
    setUser(data)
  }
  const loadUserReserves = async ()=> {
    if(!user) return

    const rs = await getUserReserves(user._id)
    console.log(rs)
    setReservations(rs)
  }

  useEffect(()=> {loadData()} ,[userId])

  useEffect(()=> {loadUserReserves()},[user])

  if(loading) 
  {
    return 'درحال بارگذاری اطلاعات کاربر'
  }
  else if (!user)
  {
    return 'یافت نشد اطلاعات کاربر'
  }

  return (
    <div>
      <h2 class="text-4xl font-bold dark:text-white">مشخصات کاربر</h2>
      <div className='p-4'>
        <KeyValueItem>
          <span>شناسه کاربر</span>
          <span>{user._id}</span>
        </KeyValueItem>
        <KeyValueItem>
          <span>نام کاربری</span>
          <span>{user.username}</span>
        </KeyValueItem>
        <KeyValueItem>
          <span>ایمیل کاربر</span>
          <span>{user.email}</span>
        </KeyValueItem>
        <KeyValueItem>
          <span>نقش کاربر</span>
          <span>{user.role == "ADMIN" ? "ادمین" :"کاربر"}</span>
        </KeyValueItem>
        <div className='text-left py-5'>
          <Button LinkComponent={NavLink} 
          to={`/admin/users/edit/${user._id}`} 
          color='info' 
           >ویرایش مشخصات کاربر</Button>
        </div>
      </div>
      {reservations && (
          <div className='p-5 m-5'>
          <h2 class="text-4xl font-bold dark:text-white">رزرو های کاربر</h2>
          <div  style={{margin:40,display:'flex'}} >
            <KeyValueItem style={{flex:1}}>
                <span>کل هزینه ها</span>
                <span>{reservations.totalCosts}</span>
            </KeyValueItem>
            <div className='px-5'></div>
            <KeyValueItem style={{flex:1}}>
                <span>کل نفرات ها</span>
                <span>{reservations.totalCounts}</span>
            </KeyValueItem>
          </div>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead >
                <TableRow >
                  <TableCell style={{background:"black" ,color:"white"}} align="center">ایدی تور</TableCell>
                  <TableCell  style={{background:"black" ,color:"white"}}  align="center">نام ثبت نام کننده</TableCell>
                  <TableCell  style={{background:"black" ,color:"white"}}  align="center">تعداد بلیت</TableCell>
                  <TableCell  style={{background:"black" ,color:"white"}}  align="center">کا هزینه ها</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservations.reservations?.map((row) => (
                  <TableRow
                    align="center"
                    key={row._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      <a href={`/tours/${row.tour_id}`}>{row.tour_id}</a>
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
      )}

    </div>
  )
}
