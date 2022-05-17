import React from 'react';
import { Card, Space, TimePicker } from 'antd';

const TimePickers = () => (
  <Card title="TimePickers">
    <Space direction="vertical" className="w-1/3" wrap>
      <TimePicker />
    </Space>
  </Card>
);

export default TimePickers;
