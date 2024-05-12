import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from '../AuthContext';

const Logout = () => {
    const navigate = useNavigate();

    const ctx = MyContext();

    useEffect(()=>{
        ctx.handleLogout();

        navigate('/');
    },[])
  return (
    <>
      Please wait, we are logged Out ...
    </>
  )
}

export default Logout
