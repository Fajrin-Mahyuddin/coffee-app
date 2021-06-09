/* eslint-disable react/prop-types */
import React from 'react';
import { MainMenu, StandartMenu } from './menuList';

const list = {
  MainMenu, StandartMenu,
};

const NavMenuWrapper = (Component) => ({ menu }) => (
  <Component Menus={list[menu]} />
);

export default NavMenuWrapper;
