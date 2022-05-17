import React from 'react';
import { Button, Card, Popover, Space } from 'antd';

const content = (
  <>
    <p>Content</p>
    <p>Content</p>
  </>
);

const PopOvers = () => (
  <Card title="PopOvers">
    <Space wrap>
      <Popover placement="topLeft" title="Title" content={content}>
        <Button>Align edge</Button>
      </Popover>
      <Popover placement="top" title="Title" content={content} arrowPointAtCenter>
        <Button>Arrow points to center</Button>
      </Popover>
    </Space>
  </Card>
);

export default PopOvers;
