import React from 'react'
import { CenterTitle } from '../../components/title/CenterTitleHead'
import { ServiceCard } from './components/ServiceCard'
import styles from './HomePage.module.css'
import { FaPlaneDeparture, FaHotel, FaCamera, FaMapSigns, FaShip, FaMountain } from 'react-icons/fa';

const tourServices = [
  { title: 'پرواز', icon: <FaPlaneDeparture size={50}/> },
  { title: 'هتل', icon: <FaHotel size={50}/> },
  { title: 'عکاسی', icon: <FaCamera size={50}/> },
  { title: 'تورهای راهنمایی', icon: <FaMapSigns size={50}/> },
  { title: 'کشتی', icon: <FaShip size={50}/> },
  { title: 'کوهنوردی', icon: <FaMountain size={50}/> }
];

export const Services = () => {
  return (
    <div>
         <CenterTitle title="سرویس ها"/>
         <ul className={styles.Grid}>
            {tourServices.map(srv=><li className={styles.ServiceLi}>{ServiceCard(srv)}</li>)}
         </ul>
    </div>
  )
}
