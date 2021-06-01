import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ContentWrapper = ({ children }, ref) => (
  <div className="content-wrapper" ref={ref}>
    {children}
  </div>
);

ContentWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default forwardRef(ContentWrapper);
