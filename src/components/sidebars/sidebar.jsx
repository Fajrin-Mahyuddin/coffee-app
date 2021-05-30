import React from 'react';
import { AppstoreOutlined, OrderedListOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside>
    <div className="logo">
      <img src="# " alt="logo" />
    </div>
    <div className="menu-wrapper">
      <ul>
        <li>
          <NavLink to="/dashboard">
            <AppstoreOutlined />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/order">
            <OrderedListOutlined />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/payment">
            <AppstoreOutlined />
            <span>Payment</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/payment">
            <AppstoreOutlined />
            <span>Setting</span>
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="footer-sidebar">
      <button type="button">sign out</button>
    </div>
  </aside>
);

export default Sidebar;
