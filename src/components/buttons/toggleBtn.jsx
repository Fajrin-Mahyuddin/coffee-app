/* eslint-disable react/prop-types */
import React from 'react';
import { MenuOutlined } from '@ant-design/icons';

const ToggleBtn = ({ toggleAction }) => (
  <div>
    <MenuOutlined className="nav-btn" id="nav-btn" onClick={toggleAction} />
  </div>
);

export default ToggleBtn;
