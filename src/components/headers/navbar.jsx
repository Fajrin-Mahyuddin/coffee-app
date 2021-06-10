/* eslint-disable react/prop-types */
import React, { createRef, forwardRef } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import { ifHeaderScrolled } from 'utils/scrolled';
import NavMenu from './navmenu';

const Navbar = ({
  toggleSidebar,
  className,
  menu,
}, ref) => {
  const refNav = createRef(null);

  window.addEventListener('scroll', () => ifHeaderScrolled(refNav));

  return (
    <header ref={refNav} className={className}>
      <div className="hide-btn">
        <MenuOutlined className="nav-btn" id="nav-btn" onClick={toggleSidebar} ref={ref} />
      </div>
      <div className="nav-logo">
        <img src="favicon.svg" alt="logo" />
      </div>
      <NavMenu menu={menu} />
    </header>
  );
};

export default forwardRef(Navbar);
