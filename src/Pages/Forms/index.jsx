import { Col, Row, Space } from 'antd';
import React from 'react';

// Sections
import Buttons from './Buttons';
import Cascaders from './Cascaders';
import Checkboxes from './Checkboxes';
import DatePickers from './DatePickers';
import FormSet from './FormSet';
import Inputs from './Inputs';
import Radios from './Radios';
import Rates from './Rates';
import Selects from './Selects';
import Sliders from './Sliders';
import Switches from './Switches';
import TimePickers from './TimePickers';
import Transfers from './Transfers';
import TreeSelects from './TreeSelects';

const FormsPage = () => (
  <Row gutter={[16, 16]}>
    <Col span={24}>
      <Space direction="vertical" className="w-full">
        <Buttons />
        <Radios />
        <Checkboxes />
        <Switches />
        <Sliders />
        <Inputs />
        <Selects />
        <TreeSelects />
        <Cascaders />
        <DatePickers />
        <TimePickers />
        <Rates />
        <Transfers />
        <FormSet />
      </Space>
    </Col>
  </Row>
);

export default FormsPage;
