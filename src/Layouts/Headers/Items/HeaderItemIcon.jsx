import React from 'react';
import { Button } from 'antd';

const HeaderItemIcon = ({ children, ...props }) => (
  <Button
    className="border-none shadow-none flex justify-center items-center"
    shape="circle"
    {...props}
  >
    {React.cloneElement(children, { className: 'text-lg' })}
  </Button>
);

export default HeaderItemIcon;
