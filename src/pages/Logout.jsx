import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('typeOfUser');
        localStorage.removeItem('userData');

        navigate('/');
    },[])
  return (
    <>
      Please wait, we are logged Out ...
    </>
  )
}

export default Logout
