import { SearchOutlined } from '@ant-design/icons';
import { Modal, Button, Card, Divider, Space } from 'antd';
import React from 'react';

const Modals = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  const success = () => {
    Modal.success({
      content: 'some messages...some messages...',
    });
  };

  const error = () => {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  };

  const warning = () => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  return (
    <>
      <Divider orientation="left"> Modals </Divider>
      <Card>
        <Space wrap>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Button onClick={info}>Info</Button>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
          <Button onClick={warning}>Warning</Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Space>
      </Card>
    </>
  );
};

export default Modals;
