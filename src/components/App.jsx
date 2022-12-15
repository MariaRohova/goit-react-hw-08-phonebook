// import Contacts from 'pages/Contacts';
// import Login from 'pages/Loading';
// import Register from 'pages/Register';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { currentUser } from 'redux/authOperation';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Suspense fallback={false}>
    <Routes>
        <Route path = '/' element = {<SharedLayout />}>
          <Route index element = { <PrivateRoute>
            <Contacts/>
          </PrivateRoute>} />
          <Route path='contacts' element={<PrivateRoute>
            <Contacts />
          </PrivateRoute>} />
          <Route path='login' element={<PublicRoute redirectTo='/contacts'>
            <Login />
          </PublicRoute>} />
          <Route path='register' element={<PublicRoute redirectTo='/contacts'>
            <Register />
          </PublicRoute>} />
        </Route>
      </Routes>
    </Suspense>
  ) : (
      <></>

  )
};

export default App;
 