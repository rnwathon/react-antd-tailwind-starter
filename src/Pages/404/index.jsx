import React from 'react';
import { Button, Col, Layout, Result, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Content>
        <Row align="middle" className="min-h-screen p-5">
          <Col xs={{ span: 24, offset: 0 }} sm={{ span: 18, offset: 3 }}>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={[
                <Button type="primary" onClick={() => navigate(-1)}>
                  Go Back
                </Button>,
              ]}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Page404;
