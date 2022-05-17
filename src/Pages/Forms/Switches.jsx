import React from 'react';
import { Card, Space, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

const Switches = () => (
  <Card title="Switches">
    <Space wrap>
      <Switch defaultChecked />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
      <Switch loading defaultChecked />
    </Space>
  </Card>
);

export default Switches;
