/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { StandartLayout } from 'layout';
import { ImgSvgBike, SnowWindy, TornadoSvg } from 'image';
import { CloseCircleFilled, KeyOutlined, UserOutlined } from '@ant-design/icons';

const LoginPage = () => (
  <StandartLayout>
    <div className="content container">
      <div className="text-wrapper">
        <h2>
          Laundry App Login
        </h2>
        <p>Free pick up and delivery, keep stay at home !</p>
        <div className="form-wrapper form-vertical mtb-20">
          <div className="alert-danger">
            <span className="alert-body">
              Something wrong !
            </span>
            <CloseCircleFilled />
          </div>
          <div className="input-wrapper input-vertical">
            <label htmlFor="username-input">
              Username
            </label>
            <UserOutlined className="form-icon" />
            <input type="text" id="username-input" placeholder="username" autoComplete="off" className="input" />
          </div>
          <div className="input-wrapper input-vertical">
            <label htmlFor="password-input">
              Password
            </label>
            <KeyOutlined className="form-icon" />
            <input type="password" id="password-input" placeholder="password" autoComplete="off" className="input error" />
          </div>
        </div>
        <button type="button" className="btn primary-btn sm-btn mr-5">Login</button>
        <button type="button" className="btn sm-btn">Sign Up</button>
      </div>
      <div className="image-wrapper">
        <SnowWindy />
        <ImgSvgBike />
        <TornadoSvg />
      </div>
    </div>
  </StandartLayout>
);

export default LoginPage;
