import React from 'react';
import { Radio, Card, Space } from 'antd';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const Radios = () => (
  <Card title="Radios">
    <Space direction="vertical" wrap>
      <Radio.Group options={options} defaultValue="Apple" />
      <Radio.Group options={options} defaultValue="Apple" optionType="button" />
    </Space>
  </Card>
);

export default Radios;
