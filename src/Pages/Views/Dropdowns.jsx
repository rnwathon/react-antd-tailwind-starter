import React from 'react';
import { Button, Card, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: '3rd menu item（disabled）',
        key: '3',
        disabled: true,
      },
    ]}
  />
);

const Dropdowns = () => (
  <Card title="Dropdowns">
    <Space className="w-full" wrap>
      <Dropdown overlay={menu} arrow>
        <Button>Dropdown</Button>
      </Dropdown>
      <Dropdown overlay={menu}>
        <Button type="link">
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button type="link">
          <Space>
            Click me
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  </Card>
);

export default Dropdowns;
