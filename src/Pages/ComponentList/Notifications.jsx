import { SearchOutlined } from '@ant-design/icons';
import { notification, Button, Card, Divider, Space } from 'antd';
import React from 'react';

const Notifications = () => {
  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  return (
    <>
      <Divider orientation="left"> Notifications </Divider>
      <Card>
        <Space wrap>
          <Button type="primary" onClick={openNotification}>
            Open the notification box
          </Button>
          <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
        </Space>
      </Card>
    </>
  );
};

export default Notifications;
