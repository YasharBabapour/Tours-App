import React from 'react'
import { TopPage } from './TopPage'
import { MazTeam } from './MazTeam'
import { Services } from './Services'
import { TopTour } from './TopTour'
import styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <div>
      <TopPage />
      <div className={styles.Boxing}>
        <MazTeam />
        <Services />
        <TopTour />
      </div>
    </div>
  )
}


export default HomePage