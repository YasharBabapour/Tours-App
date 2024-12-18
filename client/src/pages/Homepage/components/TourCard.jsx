import React from 'react'
import styles from './TourCard.module.css'
import tourImg  from '../../../assets/img/download.jpeg'
import { Card } from '../../../components/Card/Card'
import { ButtonLink } from '../../../components/Button/ButtonLink'

export const TourCard = ({
  _id,
   avatar="",
   description,
   leader_full_name,
   subject,
}) => {
  return (
   <Card>
      <div className={styles.Tour}>
        <div>
          <img className={styles.Image} src={tourImg} alt="" />
        </div>
        <div className={styles.Content}>
          <h1 className={styles.Title}>{subject}</h1>
          <h5 className={styles.Leader}>
            <span>لیدر</span>
            <span>{leader_full_name}</span>
          </h5>
          <p className={styles.Desc}>{description}</p>
          <div className={styles.BtnBx}>
           <ButtonLink title="رزرو تور" to={`/tours/${_id}`} />
         </div>
        </div>
      </div>
   </Card>
  )
}
