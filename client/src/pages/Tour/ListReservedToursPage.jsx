
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { KeyValueItem } from '../../components/KeyValueItem/KeyValueItem';
import { getAuthToken } from '../../helper/auth';

const reqGetResarvations = async () => {

   const url= 'http://localhost:5000/reservations'
   
   const config = {
      headers: { 
        'Authorization': getAuthToken()
      }
   };
      
   try {
      const res = await axios.get(url,config)  
      return res.data
   } catch (error) {
      return {} 
   }
}
const cancelTourRequest = async (reserveId)=> {
   const url= `http://localhost:5000/reservations/${reserveId}`

   let config = {
      maxBodyLength: Infinity,
      headers: { 
        'Authorization': getAuthToken()
      }
    };
    try {
      const res = await axios.delete(url,config)  
      return res.data
   } catch (error) {
      return {} 
   }
    
}

export const ListReservedToursPage = () => {
  const [reserves,setReserves] = useState([])
  const [totalCounts,setTotalCounts] = useState(0)
  const [totalCosts,setTotalCosts] = useState(0)
  const loadData = async () => {
      const res = await reqGetResarvations()
      setReserves(res.reservations);  
      setTotalCounts(res.totalCounts)
      setTotalCosts(res.totalCosts)
  } 
  useEffect(()=>{
    loadData()
  },[])

  const onCanceledTour = (tourid) => {
    try {
      cancelTourRequest(tourid)
      
    } catch (error) {
      
    }
    finally{
      loadData()

    }
  }
  return (
    <div className='p-5 m-5'>
      <h2 class="text-4xl font-bold dark:text-white">رزرو های من</h2>
      <div  style={{margin:40,display:'flex'}} >
         <KeyValueItem style={{flex:1}}>
            <span>کل هزینه ها</span>
            <span>{totalCosts}</span>
         </KeyValueItem>
         <div className='px-5'></div>
         <KeyValueItem style={{flex:1}}>
            <span>کل نفرات ها</span>
            <span>{totalCounts}</span>
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
              <TableCell  style={{background:"black" ,color:"white"}}  align="center">مدیریت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reserves?.map((row) => (
              <TableRow
                align="center"
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  <NavLink to={`/tours/${row.tour_id}`}>{row.tour_id}</NavLink>
                </TableCell>
                <TableCell align="center">{row.name_of_registrant}</TableCell>
                <TableCell align="center">{row.counts}</TableCell>
                <TableCell align="center">{row.total_cost}</TableCell>
                <TableCell align="center">
                  <Button onClick={()=>onCanceledTour(row._id)}color='error' title='لغو سفر' >لغو سفر</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
