import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoute = () => {
    const auth = localStorage.getItem("user");

    return (
        <div>
            {auth ? <Outlet /> : <Navigate to='/Signup' />}
        </div>
    )
}

export default PrivateRoute
