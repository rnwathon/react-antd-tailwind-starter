import React from 'react';
import { Avatar, Card, Segmented, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Segmenteds = () => (
  <Card title="Segmenteds">
    <Space direction="vertical" className="w-full">
      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
      <Segmented
        options={[
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                <div>User 1</div>
              </div>
            ),
            value: 'user1',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <div>User 2</div>
              </div>
            ),
            value: 'user2',
          },
          {
            label: (
              <div style={{ padding: 4 }}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <div>User 3</div>
              </div>
            ),
            value: 'user3',
          },
        ]}
      />
    </Space>
  </Card>
);

export default Segmenteds;
