import React from 'react';
import { BorderLessBtn } from 'components';
import { Link } from 'react-router-dom';

const LoginPage = () => (
  <div>
    Login Page
    <BorderLessBtn />
    <Link to="/order">Go order</Link>
    <Link to="/dashboard">Go dashboard</Link>
  </div>
);

export default LoginPage;
