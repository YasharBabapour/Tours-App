import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import tourImg  from '../../../assets/img/download.jpeg'
import { DateItem } from '../../Tour/components/DateItem'
import { KeyValueItem } from '../../../components/KeyValueItem/KeyValueItem'
import { CenterTitle } from '../../../components/title/CenterTitleHead'
import styles from '../../Tour/components/TourCardFull.module.css'
import { getTourById } from '../../../helper/tour.api'
import { Button } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getTourReserves } from '../../../helper/reserve.api'
export const TourPage = () => {
  const [tour,setTour] = useState(null)
  const [reservations,setReservations] = useState(null)
  const params = useParams()
  const tourId = params.tourId
  
  const loadData = async () => {
    const ret = await getTourById(tourId)
    setTour(ret.tour)
    
    if(!ret) return

    if(ret.tour) 
    {
      const xret = await getTourReserves(ret.tour._id)
      console.log(xret)
      setReservations(xret.reservations)
    }
  }

  useEffect(()=>{

 },[tourId])
 useEffect(()=> {
     loadData()
 },[tourId])

 return (
   <div style={{padding:"20px 100px",}}>
     <CenterTitle title={<h1 className='text-4xl font-bold my-2'>تور</h1>}></CenterTitle>
     {tour && (
        <div>
            <div className={styles.Tour}>
                <img className={styles.Image} style={{borderRadius:10}} src={tourImg} alt="" />
                <div className={styles.Content}>
                  <h1 className={styles.Title}>{tour.subject}</h1>
                  <h5 className={styles.Leader}>
                      <span>لیدر</span>
                      <span>{tour.leader_full_name}</span>
                  </h5>

                  <p className={styles.Desc}>
                      <span className={styles.DescTitle}>توضحات : </span>
                      {tour.description}
                  </p>
                  <DateItem date={tour.start_date} title='تاریخ حرکت' />
                  <DateItem date={tour.end_date} title='تاریخ برگشت' />
                  <KeyValueItem>
                      <span>ظرفیت</span>
                      <span>{tour.capacity}</span>
                  </KeyValueItem>
                  <KeyValueItem>
                      <span>جای خالی</span>
                      <span>{tour.capacity - tour.fill_capacity}</span>
                  </KeyValueItem>
                  <div>
                      <Button LinkComponent={NavLink}  to={`/admin/tours/${tour._id}/edit`}>ویرایش</Button>
                  </div>
                </div>
              </div>
              {reservations && (
                  <div className='p-5 m-5'>
                    <h2 class="text-4xl font-bold dark:text-white py-5">رزرو های کاربر</h2>
                    <TableContainer>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell style={{background:"black" ,color:"white"}} align="center">ایدی کاربر</TableCell>
                            <TableCell  style={{background:"black" ,color:"white"}}  align="center">نام ثبت نام کننده</TableCell>
                            <TableCell  style={{background:"black" ,color:"white"}}  align="center">تعداد بلیت</TableCell>
                            <TableCell  style={{background:"black" ,color:"white"}}  align="center">کا هزینه ها</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {reservations.map((row) => (
                            <TableRow
                              align="center"
                              key={row._id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell align="center" component="th" scope="row">
                                <NavLink to={`/admin/users/${row.user_id}/profile`}>{row.user_id}</NavLink>
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
     )}
</div>
 )
}
