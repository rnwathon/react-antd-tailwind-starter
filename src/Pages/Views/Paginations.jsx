import React from 'react';
import { Card, Pagination, Space } from 'antd';

const Paginations = () => (
  <Card title="Paginations">
    <Space direction="vertical" className="w-full">
      <Pagination defaultCurrent={1} total={50} />
      <Pagination defaultCurrent={6} total={500} />
      <Pagination defaultCurrent={2} total={500} showQuickJumper />
      <Pagination size="small" defaultCurrent={1} total={50} />
      <Pagination size="small" defaultCurrent={6} total={500} />
      <Pagination size="small" defaultCurrent={2} total={500} showQuickJumper disabled />
    </Space>
  </Card>
);

export default Paginations;
