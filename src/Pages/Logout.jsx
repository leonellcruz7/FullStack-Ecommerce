import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function Logout() {
    localStorage.clear()
    useEffect(() => {

    })
    return (
        <Navigate to='/login' />
    )
}
