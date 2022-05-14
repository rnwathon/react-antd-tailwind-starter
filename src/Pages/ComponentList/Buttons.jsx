import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Divider, Space } from 'antd';
import React from 'react';

const Buttons = () => (
  <>
    <Divider orientation="left"> Buttons </Divider>
    <Card>
      <Space wrap>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="primary">Primary Button</Button>
        <Button type="primary" ghost>
          Primary Ghost Button
        </Button>
        <Button type="text" danger>
          Text Danger Button
        </Button>
        <Button type="primary" danger>
          Danger Button
        </Button>
        <Button type="outline" danger ghost>
          Danger ghost Button
        </Button>
        <Button type="dashed" danger>
          Danger Dashed Button
        </Button>
        <Button disabled>Disabled Button</Button>
        <Button disabled>Disabled Dashed Button</Button>
      </Space>
      <br />
      <br />
      <Space direction="vertical" className="w-full">
        <Button block>Block Button</Button>
        <Button type="dashed" block>
          Dashed Block Button
        </Button>
        <Button type="primary" block>
          Primary Block Button
        </Button>
        <Button type="link" block>
          Link Block Button
        </Button>
      </Space>
      <br />
      <br />
      <Space wrap>
        <Button shape="circle" icon={<SearchOutlined />} />
        <Button icon={<SearchOutlined />}>With Icon</Button>
        <Button shape="round" icon={<SearchOutlined />}>
          Rounded With Icon
        </Button>
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        <Button type="primary" icon={<SearchOutlined />}>
          With Icon
        </Button>
        <Button type="primary" shape="round" icon={<SearchOutlined />}>
          Primary Rounded With Icon
        </Button>
      </Space>
      <br />
      <br />
      <Space wrap>
        <Button size="small"> Small Size </Button>
        <Button size="default"> Default Size </Button>
        <Button size="large"> Large Size </Button>
      </Space>
    </Card>
  </>
);

export default Buttons;
