import React from 'react';
import { Button, Card, Space, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Modals = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openConfirm = () => {
    confirm({
      title: 'Do you Want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
    });
  };

  const openDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
    });
  };

  const openVariationsModal = (type) => {
    Modal[type]({
      title: `This is a ${type} modal variation`,
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
    });
  };

  return (
    <Card title="Modals">
      <Space direction="vertical">
        <Space wrap>
          <Button type="primary" onClick={openModal}>
            Open Modal
          </Button>
          <Button onClick={openConfirm}>Confirm</Button>
          <Button onClick={openDeleteConfirm}>Delete</Button>
        </Space>
        <Space wrap>
          <Button onClick={() => openVariationsModal('info')}>Info</Button>
          <Button onClick={() => openVariationsModal('success')}>Success</Button>
          <Button onClick={() => openVariationsModal('error')}>Error</Button>
          <Button onClick={() => openVariationsModal('warning')}>Warning</Button>
        </Space>
      </Space>
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
    </Card>
  );
};

export default Modals;
