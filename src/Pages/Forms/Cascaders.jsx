import React from 'react';
import { Card, Cascader, Space } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const Cascaders = () => (
  <Card title="Cascaders">
    <Space direction="vertical" className="w-1/3" wrap>
      <Cascader options={options} placeholder="Please select" className="w-full" />
    </Space>
  </Card>
);

export default Cascaders;
