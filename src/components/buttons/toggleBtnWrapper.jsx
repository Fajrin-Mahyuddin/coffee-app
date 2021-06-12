/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { forwardRef } from 'react';

const ToggleBtnWrapper = (Component) => {
  return forwardRef(({ toggleSidebar, toggleHeader, ...props }, refs) => {
    const toggleAction = { toggleSidebar, toggleHeader };
    return <Component toggleAction={toggleAction[]} {...props} refs={refs} />;
  });
};

export default ToggleBtnWrapper;
