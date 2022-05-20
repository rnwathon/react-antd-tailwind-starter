import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { ExportOutlined, UserOutlined } from '@ant-design/icons';

const menuAccount = (
  <Menu
    items={[
      {
        label: 'Profile',
        icon: <UserOutlined />,
      },
      {
        danger: true,
        label: 'Logout',
        icon: <ExportOutlined />,
      },
    ]}
  />
);

const DropdownAccount = ({ ...props }) => (
  <Dropdown overlay={menuAccount} trigger={['click']} {...props}>
    <div className="flex items-center gap-1 cursor-pointer">
      <Avatar />
      <strong>Admin</strong>
    </div>
  </Dropdown>
);

export default DropdownAccount;
