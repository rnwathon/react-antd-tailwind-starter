import { SearchOutlined } from '@ant-design/icons';
import { message, Button, Card, Divider, Space } from 'antd';
import React from 'react';

const Messages = () => {
  const info = () => {
    message.info('This is a normal message');
  };

  const success = () => {
    message.success('This is a success message');
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };

  return (
    <>
      <Divider orientation="left"> Messages </Divider>
      <Card>
        <Space wrap>
          <Button type="primary" onClick={info}>
            Display normal message
          </Button>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
          <Button onClick={warning}>Warning</Button>
        </Space>
      </Card>
    </>
  );
};

export default Messages;
