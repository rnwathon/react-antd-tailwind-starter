import { SearchOutlined } from '@ant-design/icons';
import { Alert, Card, Divider, Space } from 'antd';
import React from 'react';

const Alerts = () => (
  <>
    <Divider orientation="left"> Alerts </Divider>
    <Card>
      <Space direction="vertical" className="w-full" wrap>
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          closable
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
        />
      </Space>
    </Card>
  </>
);

export default Alerts;
