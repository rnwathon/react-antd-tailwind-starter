import React from 'react';
import { Button, Card, message, Popconfirm, Space } from 'antd';

const text = 'Are you sure to delete this task?';

const PopConfirms = () => {
  const confirm = () => {
    message.info('Clicked on Yes.');
  };

  return (
    <Card title="PopConfirms">
      <Space wrap>
        <Popconfirm placement="topLeft" title={text} onConfirm={confirm}>
          <Button>Align edge</Button>
        </Popconfirm>
        <Popconfirm placement="top" title={text} onConfirm={confirm} arrowPointAtCenter>
          <Button>Arrow points to center</Button>
        </Popconfirm>
      </Space>
    </Card>
  );
};

export default PopConfirms;
