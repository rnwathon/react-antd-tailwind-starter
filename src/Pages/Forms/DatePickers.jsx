import React from 'react';
import { Card, DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const DatePickers = () => (
  <Card title="DatePickers">
    <Space direction="vertical" className="w-1/3" wrap>
      <DatePicker />
      <DatePicker picker="year" />
      <DatePicker picker="month" />
      <DatePicker picker="week" />
      <RangePicker />
    </Space>
  </Card>
);

export default DatePickers;
