import React from 'react';
import { Card, Slider, Space } from 'antd';

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

const Sliders = () => (
  <Card title="Sliders">
    <Space direction="vertical" className="w-full" wrap>
      <Slider defaultValue={30} />
      <Slider range marks={marks} defaultValue={[26, 37]} />
    </Space>
  </Card>
);

export default Sliders;
