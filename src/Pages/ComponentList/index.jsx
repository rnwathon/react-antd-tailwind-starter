import { Col, Collapse, Row, Space } from 'antd';
import React from 'react';
import Alerts from './Alert';
import Buttons from './Buttons';
import Cards from './Cards';
import Collapses from './Collapses';
import Forms from './Forms';
import Messages from './Messages';
import Modals from './Modals';
import Notifications from './Notifications';
import Popovers from './Popovers';
import Statistics from './Statistics';
import Tables from './Tables';
import Tooltips from './Tooltips';

const ComponentList = () => {
  const [state, setState] = React.useState();

  return (
    <Row gutter={16}>
      <Col span={24}>
        <Space direction="vertical">
          <Statistics />
          <Alerts />
          <Buttons />
          <Forms />
          <Tables />
          <Cards />
          <Collapses />
          <Row gutter={16}>
            <Col span={24} xl={12}>
              <Popovers />
            </Col>
            <Col span={24} xl={12}>
              <Tooltips />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24} xl={8}>
              <Modals />
            </Col>
            <Col span={24} xl={8}>
              <Messages />
            </Col>
            <Col span={24} xl={8}>
              <Notifications />
            </Col>
          </Row>
        </Space>
      </Col>
    </Row>
  );
};

export default ComponentList;
