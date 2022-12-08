import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Routeguard = () => {
    const token = Cookies.get('token');
    return (
        (token !== undefined && token !== "") ? <Outlet /> : <Navigate to="/login" />
    )
}

export default Routeguard