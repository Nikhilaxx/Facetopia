"use client"
import { logout } from '@/actions/auth-actions'
import React from 'react'

const LogoutBtn = () => {
    const handleLogout = async () =>{
       await logout()
    }
  return (
    <span onClick={handleLogout} className="inline-block w-full cursor-pointer text-destrucyive">LogoutBtn</span>
  )
}

export default LogoutBtn;