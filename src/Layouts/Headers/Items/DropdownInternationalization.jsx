import React from 'react';
import { Menu } from 'antd';
import { IoLanguage } from 'react-icons/io5';
import HeaderItemIconDropdown from './HeaderItemIconDropdown';

const menuInter = (
  <Menu
    items={[
      {
        label: '日本語',
      },
      {
        label: 'English',
      },
      {
        label: 'Bahasa Indonesia',
      },
    ]}
  />
);

const DropdownInternationalization = ({ ...props }) => (
  <HeaderItemIconDropdown overlay={menuInter} {...props}>
    <IoLanguage />
  </HeaderItemIconDropdown>
);

export default DropdownInternationalization;
