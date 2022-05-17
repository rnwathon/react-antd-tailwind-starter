import React from 'react';
import { Card, Rate, Space } from 'antd';
import { HeartFilled } from '@ant-design/icons';

const Rates = () => (
  <Card title="Rates">
    <Space direction="vertical" wrap>
      <Rate allowHalf defaultValue={2.5} />
      <Rate character={<HeartFilled />} allowHalf defaultValue={4} />
    </Space>
  </Card>
);

export default Rates;
