import React from 'react';
import { Avatar, Badge, Card, Space } from 'antd';

const Badges = () => (
  <Card title="Badges">
    <Space direction="vertical" className="w-full" wrap>
      <Space size="large" wrap>
        <Badge count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={0} showZero>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={100}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge dot>
          <Avatar shape="square" size="large" />
        </Badge>
      </Space>
      <Space size="large" wrap>
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Default" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>
    </Space>
  </Card>
);

export default Badges;
