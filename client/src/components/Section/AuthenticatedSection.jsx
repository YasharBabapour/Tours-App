import React from 'react'
import { isAuthenticated } from '../../helper/auth'

export const AuthenticatedSection = ({children}) => {
   const isAuthed = isAuthenticated()

   if(isAuthed) return children

   return null
}
