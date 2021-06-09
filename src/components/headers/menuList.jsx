import React from 'react';
import { BellOutlined, MailOutlined } from '@ant-design/icons';

const MainMenu = () => (
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
);

const StandartMenu = () => (
  <ul>
    <li>
      <a href="# ">
        Dashboard
      </a>
    </li>
    <li>
      <a href="# ">
        Login
      </a>
    </li>
  </ul>
);

export {
  MainMenu, StandartMenu,
};
