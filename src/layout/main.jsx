/* eslint-disable react/prop-types */
import React, { createRef, useEffect } from 'react';
import { ContentWrapper, Navbar, Sidebar } from 'components';
import { resetToggle, toggleAction } from 'utils/drawer-helper';

const Content = ({ children }) => {
  return (
    <>
      <div className="title">
        <h1>Dashboard</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
      </div>
      <div className="content">{children}</div>
    </>
  )
}

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
          {children}
        </>
      </ContentWrapper>
    </div>
  );
};

MainLayout.Content = Content;

export default MainLayout;
