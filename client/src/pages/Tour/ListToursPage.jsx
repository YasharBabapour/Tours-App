import React, { useEffect, useState } from 'react'
import { CenterTitle } from '../../components/title/CenterTitleHead'
import axios from 'axios';
import { Grid } from '../../components/Grid/Grid';
import { TourCardFull } from './components/TourCardFull';
import { Button } from '@mui/material';

const request = async (page = 1,size = 10) => {

   page = page ?? 1
   size = size ?? 10
 
   const url = `http://localhost:5000/tours?page=${page}&limit=${size}`
   const config = {
     method: 'get',
     maxBodyLength: Infinity,
   };
 
   try {
     const result = await axios.get(url,config)
     return result.data
   } catch (error) {
     console.log(error)
     return null
   }
 }
export const ListToursPage = () => {
  const [tours,setTours] = useState([])
  const [paginate,setPaginate] = useState(null)
  const [endLoad,setEndLoad] = useState(false)
  const loadData = async ()=> {
    const page = paginate ? paginate.currentPage + 1 : 1
    const tours = await request(page,5)
    
    setPaginate(tours)
    setTours(t=> tours?.data ? [...t,...tours.data] : t)

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
      <div style={{padding:50,boxSizing:"border-box"}}>
         <CenterTitle title={<h1 className='text-4xl font-bold' style={{color:'orange'}}>سفرها</h1>}></CenterTitle>
         <Grid  
            data={tours}
            component={TourCardFull}
         />
         {!endLoad && (
           <CenterTitle
           title={<Button onClick={loadData}>بیشتر</Button>}
           ></CenterTitle>
         ) 
         }
      </div>
  )
}
