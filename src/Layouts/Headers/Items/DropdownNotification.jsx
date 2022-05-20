import React from 'react';
import { Button, Menu, Typography } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import HeaderItemIconDropdown from './HeaderItemIconDropdown';

const { Title, Text } = Typography;

const dummyNotif = [
  {
    title: 'Title 1',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque, nostrum modi ab ea impedit maxime ipsam?',
  },
  {
    title: 'Title 2',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque, nostrum modi ab ea impedit maxime ipsam?',
  },
  {
    title: 'Title 2',
    message:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat doloremque, nostrum modi ab ea impedit maxime ipsam?',
  },
];

const menuNotif = (
  <Menu className="w-96">
    <Title level={4} className="px-2 pt-2">
      Notifications
    </Title>
    <Menu.Divider />
    {dummyNotif.map((notif, idx) => (
      <Menu.Item key={`notif-${idx}`}>
        <Text strong>{notif.title}</Text>
        <br />
        <Text>{notif.message}</Text>
      </Menu.Item>
    ))}
    <Menu.Divider />
    <Button type="link" className="pb-3" block>
      See All
    </Button>
  </Menu>
);

const DropdownNotification = ({ ...props }) => (
  <HeaderItemIconDropdown overlay={menuNotif} {...props}>
    <BellOutlined />
  </HeaderItemIconDropdown>
);

export default DropdownNotification;
