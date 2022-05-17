import React from 'react';
import { Alert, Card, Space, Spin } from 'antd';

const Spins = () => (
  <Card title="Spins">
    <Space direction="vertical" className="w-full" wrap>
      <Spin tip="Loading...">
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
    </Space>
  </Card>
);

export default Spins;
