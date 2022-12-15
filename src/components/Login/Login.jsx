import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/authOperation';
import { LoginFormStyled } from './Styled';


const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
      <div >
        <p>First time on the site? </p>
        <Link to="/register">Sign up</Link>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
