import LoginForm from 'components/Login/Login';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
