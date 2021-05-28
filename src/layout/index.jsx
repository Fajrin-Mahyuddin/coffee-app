import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper, Navbar, Sidebar } from 'components';

const MainLayout = ({ children }) => (
  <div className="main">
    <Sidebar />
    <ContentWrapper>
    {/* <Navbar /> */}
      {children}
    </ContentWrapper>
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
