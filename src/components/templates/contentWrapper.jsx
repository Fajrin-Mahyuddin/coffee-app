import React from 'react';
import PropTypes from 'prop-types';

const ContentWrapper = ({ children }) => (
  <div className="content-wrapper">
    {children}
  </div>
);

ContentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentWrapper;
