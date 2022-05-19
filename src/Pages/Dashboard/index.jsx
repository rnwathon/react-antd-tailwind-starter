import React from 'react';
import { Card, Col, Row, Space, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, LikeOutlined } from '@ant-design/icons';

// Sections
import Typograhies from './Typograhies';
import Colors from './Colors';

const Dashboard = () => (
  <Row gutter={[16, 16]}>
    <Col span={6}>
      <Card>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={6}>
      <Card>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={6}>
      <Card>
        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
      </Card>
    </Col>
    <Col span={6}>
      <Card>
        <Statistic title="Unmerged" value={93} suffix="/ 100" />
      </Card>
    </Col>
    <Col span={24}>
      <Colors />
    </Col>
    <Col span={24}>
      <Typograhies />
    </Col>
  </Row>
);

export default Dashboard;
