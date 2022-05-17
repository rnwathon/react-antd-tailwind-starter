import React from 'react';
import { notification, Button, Card, Space } from 'antd';

const Notifications = () => {
  const openNotification = (type) => {
    notification[type]({
      message: `This is ${type} notification`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  return (
    <Card title="Notifications">
      <Space wrap>
        <Button onClick={() => openNotification('success')}>Success</Button>
        <Button onClick={() => openNotification('info')}>Info</Button>
        <Button onClick={() => openNotification('error')}>Error</Button>
        <Button onClick={() => openNotification('warning')}>Warning</Button>
      </Space>
    </Card>
  );
};

export default Notifications;
