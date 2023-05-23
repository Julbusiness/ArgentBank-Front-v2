import React from 'react'
import { Navigate } from 'react-router-dom'
import { accountService } from '../Services/account.service'

export default function AuthProvider({children}) {

  if(!accountService.isLogged) {
    return <Navigate to="/user/login" />
  }

  return (
    children
  )
}
