import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from './hooks/useAuth'

const ProtectedRoutesDoc = () => {
  const {disLogin} = useAuth();

  return disLogin ? <Outlet/> : <Navigate to={'/dlogin'}/>;
}

export default ProtectedRoutesDoc