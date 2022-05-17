import React from 'react';
import { Card, Input, InputNumber, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Inputs = () => (
  <Card title="Inputs">
    <Space direction="vertical" className="w-1/3" wrap>
      <Input placeholder="basic usage" />
      <Input.Group compact>
        <Input style={{ width: '30%' }} defaultValue="0571" />
        <Input style={{ width: '70%' }} defaultValue="26888888" />
      </Input.Group>
      <Input placeholder="with prefix" prefix={<UserOutlined />} />
      <Input.Search placeholder="input search text" enterButton />
      <InputNumber min={1} max={10} defaultValue={3} />
      <Input.TextArea showCount maxLength={100} style={{ height: 120 }} />
    </Space>
  </Card>
);

export default Inputs;
