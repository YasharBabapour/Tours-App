import React from 'react'
import { Card } from '../../../components/Card/Card'
import styles from './TourCardFull.module.css'
import { ButtonLink } from '../../../components/Button/ButtonLink'
import tourImg  from '../../../assets/img/download.jpeg'
import { DateItem } from './DateItem'
import { KeyValueItem } from '../../../components/KeyValueItem/KeyValueItem'
import { SocialTour } from './SocialTour'

export const TourCardFull = ({
   _id,
   avatar,
   leader_full_name,
   capacity,
   description,
   end_date,
   fill_capacity,
   start_date,
   subject,
}) => {
  return (
   <Card>
      <div className={styles.Tour}>
        <img className={styles.Image} src={tourImg} alt="" />
        <div className={styles.Content}>
          <h1 className={styles.Title}>{subject}</h1>
          <h5 className={styles.Leader}>
            <span>لیدر</span>
            <span>{leader_full_name}</span>
          </h5>

          <p className={styles.Desc}>
            <span className={styles.DescTitle}>توضحات : </span>
            {description}
          </p>
          <DateItem date={start_date} title='تاریخ حرکت' />
          <DateItem date={end_date} title='تاریخ برگشت' />
          <KeyValueItem>
            <span>ظرفیت</span>
            <span>{capacity}</span>
          </KeyValueItem>
          <KeyValueItem>
            <span>جای خالی</span>
            <span>{capacity - fill_capacity}</span>
          </KeyValueItem>
          <div className={styles.BtnBx}>
           <ButtonLink title="مشاهده تور" to={`/tours/${_id}`} />
          </div>
          <SocialTour/>
        </div>
      </div>
   </Card>
  )
}
