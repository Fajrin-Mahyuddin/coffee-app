import React from 'react';
import { StandartLayout } from 'layout';
import ImgSvg from 'image';

const LoginPage = () => (
  <StandartLayout>
    <div className="content container">
      <div className="text-wrapper">
        <h2>
          Grow your business faster with
          <span> fredo</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ab facere eaque?
        </p>
        <button type="button" className="btn primary-btn sm-btn mr-5">Get Demo</button>
        <button type="button" className="btn sm-btn">Sing Up</button>
      </div>
      <div className="image-wrapper">
        <ImgSvg />
      </div>
    </div>
  </StandartLayout>
);

export default LoginPage;
