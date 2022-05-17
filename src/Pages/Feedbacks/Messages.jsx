import React from 'react';
import { message, Button, Card, Space } from 'antd';

const Messages = () => {
  const openMessage = (type) => {
    message[type]({
      content: `This is ${type} message`,
    });
  };

  return (
    <Card title="Messages">
      <Space wrap>
        <Button onClick={() => openMessage('success')}>Success</Button>
        <Button onClick={() => openMessage('info')}>Info</Button>
        <Button onClick={() => openMessage('error')}>Error</Button>
        <Button onClick={() => openMessage('warning')}>Warning</Button>
      </Space>
    </Card>
  );
};

export default Messages;
