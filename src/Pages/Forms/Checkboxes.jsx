import React from 'react';
import { Checkbox, Card, Space } from 'antd';

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const Checkboxes = () => (
  <Card title="Checkboxes">
    <Space direction="vertical" wrap>
      <Checkbox.Group options={options} defaultValue={['Apple']} />
    </Space>
  </Card>
);

export default Checkboxes;
