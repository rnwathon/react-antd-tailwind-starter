import React from 'react';
import { Button, Dropdown } from 'antd';

const HeaderItemIconDropdown = ({ children, overlay, ...props }) => (
  <Dropdown overlay={overlay} trigger={['click']}>
    <Button
      className="border-none shadow-none flex justify-center items-center"
      shape="circle"
      {...props}
    >
      {React.cloneElement(children, { className: 'text-lg' })}
    </Button>
  </Dropdown>
);

export default HeaderItemIconDropdown;
