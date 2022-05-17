import React from 'react';
import { Card, Progress, Space } from 'antd';

const Progresses = () => (
  <Card title="Progresses">
    <Space direction="vertical" wrap>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
      <Space wrap>
        <Progress type="circle" percent={75} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </Space>
    </Space>
  </Card>
);

export default Progresses;
