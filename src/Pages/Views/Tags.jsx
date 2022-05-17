import React from 'react';
import { Card, Space, Tag } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const Tags = () => (
  <Card title="Tags">
    <Space direction="vertical" className="w-full" wrap>
      <Space wrap>
        <Tag>Tag 1</Tag>
        <Tag>
          <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
        </Tag>
        <Tag closable>Tag 2</Tag>
      </Space>
      <Space wrap>
        <Tag icon={<CheckCircleOutlined />} color="success">
          success
        </Tag>
        <Tag icon={<SyncOutlined spin />} color="processing">
          processing
        </Tag>
        <Tag icon={<CloseCircleOutlined />} color="error">
          error
        </Tag>
        <Tag icon={<ExclamationCircleOutlined />} color="warning">
          warning
        </Tag>
        <Tag icon={<ClockCircleOutlined />} color="default">
          waiting
        </Tag>
        <Tag icon={<MinusCircleOutlined />} color="default">
          stop
        </Tag>
      </Space>
      <Space wrap>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="geekblue">geekblue</Tag>
        <Tag color="purple">purple</Tag>
      </Space>
    </Space>
  </Card>
);

export default Tags;
