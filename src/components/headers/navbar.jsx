/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { forwardRef } from 'react';
import { MailOutlined, BellOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = (props, ref) => {
  const { toggleSidebar } = props;
  return (
    <header>
      <div className="hide-btn">
        <MenuOutlined className="nav-btn" id="nav-btn" onClick={toggleSidebar} ref={ref} />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="# ">
              <MailOutlined />
            </a>
          </li>
          <li>
            <a href="# ">
              <BellOutlined />
            </a>
          </li>
          <li>
            <a href="# ">
              <img src="favicon.svg" alt="img-profile" />
              <div>
                <span>Fajrin</span>
                <span>Administrator</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
// Navbar.propTypes = {
//   hideSidebar: PropTypes.func.isRequired,
// };

export default forwardRef(Navbar);
