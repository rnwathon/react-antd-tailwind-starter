import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Space } from 'antd';

const Buttons = () => (
  <Card title="Buttons">
    <Space direction="vertical">
      <Space wrap>
        <Button type="primary"> Primary </Button>
        <Button type="danger"> Danger </Button>
        <Button> Default </Button>
        <Button type="dashed"> Dashed </Button>
        <Button type="text"> Text </Button>
        <Button type="text" danger>
          Text Danger
        </Button>
        <Button type="link"> Link </Button>
      </Space>
      <Space wrap>
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button type="danger" ghost>
          Danger
        </Button>
      </Space>
      <Space wrap>
        <Button type="primary" icon={<SearchOutlined />} />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button type="primary" icon={<SearchOutlined />} shape="circle" />
        <Button type="primary" icon={<SearchOutlined />} shape="round">
          Search
        </Button>
      </Space>
      <Button.Group>
        <Button type="primary"> Group 1 </Button>
        <Button type="primary"> Group 2 </Button>
      </Button.Group>
    </Space>
  </Card>
);

export default Buttons;
