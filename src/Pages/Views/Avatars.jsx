import React from 'react';
import { Avatar, Card, Space } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

const Avatars = () => (
  <Card title="Avatars">
    <Space direction="vertical" className="w-full" wrap>
      <Space wrap>
        <Avatar size="small" icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar size={64} icon={<UserOutlined />} />
      </Space>
      <Space wrap>
        <Avatar.Group>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
      </Space>
    </Space>
  </Card>
);

export default Avatars;
