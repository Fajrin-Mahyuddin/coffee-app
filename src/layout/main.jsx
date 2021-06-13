/* eslint-disable react/prop-types */
import React, { createRef, useEffect } from 'react';
import { ContentWrapper, Navbar, Sidebar } from 'components';
import { resetToggle, toggleAction } from 'utils/drawer-helper';

const MainLayout = ({ children }) => {
  const sideRef = createRef();
  const navRef = createRef();
  const contentRef = createRef();

  useEffect(() => {
    window.addEventListener('resize', () => resetToggle(sideRef, contentRef));
    return () => {
      window.removeEventListener('resize');
    };
  }, []);

  return (
    <div className="main">
      <Sidebar
        ref={sideRef}
        toggleSidebar={() => toggleAction(sideRef, contentRef)}
      />
      <ContentWrapper ref={contentRef}>
        <>
          <Navbar
            menu="MainMenu"
            toggleAction={() => toggleAction(sideRef, contentRef)}
            ref={navRef}
          />
          <div className="content">
            {children}
          </div>
        </>
      </ContentWrapper>
    </div>
  );
};

export default MainLayout;
