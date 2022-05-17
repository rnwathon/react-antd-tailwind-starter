import React from 'react';
import { Button, Card, Space, Tooltip } from 'antd';

const Tooltips = () => (
  <Card title="Tooltips">
    <Space wrap>
      <Tooltip placement="topLeft" title="Prompt Text">
        <Button>Align edge</Button>
      </Tooltip>
      <Tooltip placement="top" title="Prompt Text" arrowPointAtCenter>
        <Button>Arrow points to center</Button>
      </Tooltip>
    </Space>
  </Card>
);

export default Tooltips;
