/* eslint-disable react/prop-types */
import React, { createRef, useRef } from 'react';
import { ContentWrapper, Navbar } from 'components';
import { toggleAction } from 'utils/drawer-helper';

const StandartLayout = ({ children }) => {
  const navRef = createRef();
  const contentRef = useRef();
  return (
    <div className="standart">
      <Navbar menu="StandartMenu" ref={navRef} toggleAction={() => toggleAction(navRef, contentRef)} className="container standart-nav" />
      <ContentWrapper ref={contentRef}>
        {children}
      </ContentWrapper>
    </div>
  );
};

export default StandartLayout;
