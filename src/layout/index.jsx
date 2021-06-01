import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, Navbar, Sidebar } from 'components';
import { toggleSidebar } from 'utils/drawer-helper';

const MainLayout = ({ children }) => {
  const sideRef = useRef();
  const contentRef = useRef();
  return (
    <div className="main">
      <Sidebar toggleSidebar={() => toggleSidebar(sideRef, contentRef)} ref={sideRef} />
      <ContentWrapper ref={contentRef}>
        <>
          <Navbar toggleSidebar={() => toggleSidebar(sideRef, contentRef)} />
          <div className="content">
            {children}
          </div>
        </>
      </ContentWrapper>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
