/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import {
  AppstoreOutlined,
  ProfileOutlined,
  CreditCardOutlined,
  CloseCircleOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = (props, ref) => {
  const { toggleSidebar } = props;
  return (
    <aside className="sidestyle" ref={ref}>
      <CloseCircleOutlined onClick={toggleSidebar} className="close-btn" />
      <div className="logo">
        <Link to="/">
          <img src="favicon.svg" alt="logo" />
        </Link>
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
              <ProfileOutlined />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/payment">
              <CreditCardOutlined />
              <span>Payment</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/history">
              <FieldTimeOutlined />
              <span>History</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer-sidebar">
        <button type="button">sign out</button>
      </div>
    </aside>
  );
};

export default forwardRef(Sidebar);
