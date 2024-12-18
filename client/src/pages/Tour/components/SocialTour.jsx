import React from 'react'
import styles from './SocialTour.module.css'
import {AiFillLike,AiFillFileMarkdown,AiOutlineShareAlt} from 'react-icons/ai'
export const SocialTour = () => {
  return (
    <div className={styles.ShareTour}>
      <AiFillLike  />
      <AiOutlineShareAlt  />
      <AiFillFileMarkdown/>
    </div>
  )
}
