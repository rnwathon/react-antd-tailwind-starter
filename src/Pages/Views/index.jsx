import { Col, Row, Space } from 'antd';
import React from 'react';

// Sections
import Avatars from './Avatars';
import Badges from './Badges';
import Calendars from './Calendars';
import Cards from './Cards';
import Carousels from './Carousels';
import Collapses from './Collapses';
import Dropdowns from './Dropdowns';
import Lists from './Lists';
import Paginations from './Paginations';
import Segmenteds from './Segmenteds';
import Spins from './Spins';
import Tables from './Tables';
import TabsSection from './Tabs';
import Tags from './Tags';

const FormsPage = () => (
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <Space direction="vertical" className="w-full">
        <Avatars />
        <Badges />
        <Tags />
        <Calendars />
        <Cards />
        <Carousels />
        <Collapses />
        <Dropdowns />
        <Lists />
        <Segmenteds />
        <TabsSection />
        <Tables />
        <Paginations />
        <Spins />
      </Space>
    </Col>
  </Row>
);

export default FormsPage;
