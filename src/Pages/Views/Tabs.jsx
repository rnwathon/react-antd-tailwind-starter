import React from 'react';
import { Card, Space, Tabs } from 'antd';

const { TabPane } = Tabs;

const TabsSection = () => (
  <Card title="Tabs">
    <Space direction="vertical" className="w-full" wrap>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Card Tab 1" key="1">
          Content of card tab 1
        </TabPane>
        <TabPane tab="Card Tab 2" key="2">
          Content of card tab 2
        </TabPane>
        <TabPane tab="Card Tab 3" key="3">
          Content of card tab 3
        </TabPane>
      </Tabs>
    </Space>
  </Card>
);

export default TabsSection;
