import { Col, Row, Space } from 'antd';
import React from 'react';

// Sections
import Alerts from './Alerts';
import Messages from './Messages';
import Modals from './Modals';
import Notifications from './Notifications';
import PopConfirms from './PopConfirms';
import PopOvers from './PopOvers';
import Progresses from './Progresses';
import Tooltips from './Tooltips';

const FormsPage = () => (
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <Space direction="vertical" className="w-full">
        <Alerts />
        <Progresses />
        <Messages />
        <Notifications />
        <Modals />
        <Tooltips />
        <PopOvers />
        <PopConfirms />
      </Space>
    </Col>
  </Row>
);

export default FormsPage;
