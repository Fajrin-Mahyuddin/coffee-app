/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import {
  AppstoreOutlined,
  OrderedListOutlined,
  CreditCardOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Sidebar = (props, ref) => {
  const { toggleSidebar } = props;
  return (
    <aside className="sidestyle" ref={ref}>
      <CloseCircleOutlined onClick={toggleSidebar} className="close-btn" />
      <div className="logo">
        <img src="favicon.svg" alt="logo" />
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
              <CreditCardOutlined />
              <span>Payment</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/payment">
              <AppstoreOutlined />
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
// Sidebar.propTypes = {
//   refs: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.instanceOf(Component),
//   ]).isRequired,
// };

export default forwardRef(Sidebar);
