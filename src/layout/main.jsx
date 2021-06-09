/* eslint-disable react/prop-types */
import React, { createRef } from 'react';
import { ContentWrapper, Navbar, Sidebar } from 'components';
import { toggleSidebar } from 'utils/drawer-helper';

const MainLayout = ({ children }) => {
  const sideRef = createRef();
  const contentRef = createRef();
  return (
    <div className="main">
      <Sidebar
        ref={sideRef}
        toggleSidebar={() => toggleSidebar(sideRef, contentRef)}
      />
      <ContentWrapper ref={contentRef}>
        <>
          <Navbar
            menu="MainMenu"
            toggleSidebar={() => toggleSidebar(sideRef, contentRef)}
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
