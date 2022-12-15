import RegisterForm from 'components/Register/Register';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <RegisterForm />;
};

export default Register;
