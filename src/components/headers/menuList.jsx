import React from 'react';
import { BellOutlined, MailOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

const MainMenu = () => (
  <ul>
    <li>
      <NavLink to="# " className="nav-menu-item">
        <MailOutlined />
      </NavLink>
    </li>
    <li>
      <a href="# " className="nav-menu-item">
        <BellOutlined />
      </a>
    </li>
    <li>
      <a href="# " className="nav-menu-item">
        <img src="favicon.svg" alt="img-profile" />
        <div>
          <span>Fajrin</span>
          <span>Administrator</span>
        </div>
      </a>
    </li>
  </ul>
);

const StandartMenu = () => (
  <ul>
    <li className="mrl-20">
      <NavLink to="/dashboard" className="nav-menu-item active">
        Home
      </NavLink>
    </li>
    <li className="mrl-20">
      <NavLink to="/news" className="nav-menu-item">
        News
      </NavLink>
    </li>
    <li className="mrl-20">
      <Link to="# " className="nav-menu-item">
        About us
      </Link>
    </li>
    <li className="mrl-20">
      <NavLink className="nav-menu-item btn primary-btn sm-btn" to="/login">
        Sign up
      </NavLink>
    </li>
  </ul>
);

export {
  MainMenu, StandartMenu,
};
