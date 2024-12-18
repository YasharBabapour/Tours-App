import React from 'react'
import styles from './UserTableSetting.module.css'
import { AiFillEye } from "react-icons/ai";
import { FcEditImage ,FcFullTrash} from "react-icons/fc";
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { deleteUserById } from '../../../../helper/user.api';

export const UserTableSetting = ({userId,reload=()=>{}}) => {
  const onDeleteHandler = async () => {
    const deleted = await deleteUserById(userId)
    if(deleted)
    {
      alert('کاربر با موفقیت حذف شد')
      reload()
    }
    else  alert('حذف کاربر دچار خظاشد')

  }
  return (
    <div className={styles.UserTableSetting}>
      <NavLink to={`/admin/users/profile/${userId}`}>
        <AiFillEye size={25}/>
      </NavLink>
      <NavLink to={`/admin/users/edit/${userId}`}>
        <FcEditImage size={25}/>
      </NavLink>
        <FcFullTrash onClick={onDeleteHandler} size={25}/>
    </div>
  )
}
