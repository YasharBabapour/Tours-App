import React, { useEffect, useState } from 'react'
import { CenterTitle } from '../../components/title/CenterTitleHead'
import axios from 'axios'
import styles from './HomePage.module.css'
import { TourCard } from './components/TourCard'
import { ButtonLink } from '../../components/Button/ButtonLink'
import {Grid} from '../../components/Grid/Grid'
export const TopTour = () => {
   const [tours,setTours] = useState([])

   const loadTours = () => {

      let config = {
         method: 'get',
         maxBodyLength: Infinity,
         url: 'http://localhost:5000/tours/top',
         headers: { }
      };

      axios.request(config)
      .then((response) =>setTours(response.data))
      .catch((error) => console.log(error));
   }

   useEffect(()=>{
      loadTours()
   },[])

   console.log(tours)
   return (
    <div>
         <CenterTitle title="سفرها و تور ها"/>
         <Grid data={tours} component={TourCard} />
         <CenterTitle
            title={<ButtonLink
                to="/tours" 
                title="موارد بیشتر" 
               bgColor='blue'
            />}
         />
    </div>

  )
}
