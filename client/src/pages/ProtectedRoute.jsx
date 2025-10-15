import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children,role})=>{
    const token = localStorage.getItem("token")
    const userRole = localStorage.getItem("role")

    if(!token || (role && userRole !== role)){
        alert("Access denied ! Admins only")
        return <Navigate to='/home' />
    } 

    return children
}

export default ProtectedRoute