/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import NavMenuWrapper from './navMenuWrapper';

const NavMenu = ({ Menus }) => {
  return (
    <>
      <div className="nav-logo">
        <img src="# " alt="logo" />
      </div>
      <nav className="nav-menu">
        <Menus />
      </nav>
    </>
  );
};

export default NavMenuWrapper(NavMenu);
