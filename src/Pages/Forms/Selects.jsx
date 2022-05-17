import React from 'react';
import { Card, Select, Space } from 'antd';

const { Option, OptGroup } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const Selects = () => (
  <Card title="Selects">
    <Space direction="vertical" className="w-1/3" wrap>
      <Space className="w-full" wrap>
        <Select defaultValue="lucy" style={{ width: '120px' }}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: '120px' }}>
          <OptGroup label="Manager">
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </OptGroup>
          <OptGroup label="Engineer">
            <Option value="Yiminghe">yiminghe</Option>
          </OptGroup>
        </Select>
      </Space>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
      >
        {children}
      </Select>
    </Space>
  </Card>
);

export default Selects;
