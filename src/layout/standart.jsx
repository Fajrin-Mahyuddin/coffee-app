/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { ContentWrapper, Navbar } from 'components';

const StandartLayout = ({ children }) => {
  const navRef = useRef();
  return (
    <div className="standart">
      <Navbar menu="StandartMenu" ref={navRef} className="container standart-nav" />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </div>
  );
};

export default StandartLayout;
