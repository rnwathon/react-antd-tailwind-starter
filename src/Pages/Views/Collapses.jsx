import React from 'react';
import { Card, Collapse, Space } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Collapses = () => (
  <Card title="Collapses">
    <Space direction="vertical" className="w-full">
      <Collapse defaultActiveKey={['1']}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="This is panel header 1" key="1">
          {text}
        </Panel>
        <Panel header="This is panel header 2" key="2">
          {text}
        </Panel>
        <Panel header="This is panel header 3" key="3">
          {text}
        </Panel>
      </Collapse>
    </Space>
  </Card>
);

export default Collapses;
