import React from 'react'
import styles from './HomePage.module.css'
import image from '../../assets/img/download (1).jpeg'

export const MazTeam = () => {
  return (
    <div className={styles.MazTeam}>
      <div>
        <h1 className={styles.MazTitle}>تیم مازگرد</h1>
        <div className={styles.MoreContainer}>
          <p className={styles.MazDesc}>تیم مازگرد به مدت ده سال در زمینه گردگشری در استان مازندران با کیفیت و نظم فوق العاده ای در حال فعالیت است وبسیاری از توریست های ایرانی و خارجی را پوشش خواهد داد.</p>
          <a className={styles.MazMore} href="">
            موارد بیشتر
          </a>
        </div>
      </div>

      <div>
        <img className={styles.MazImage} src={image} alt="" />
      </div>
    </div>
  )
}
