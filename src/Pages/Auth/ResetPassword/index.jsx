import React from 'react';
import { Button, Card, Col, Form, Input, Layout, Result, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isResult, setIsResult] = React.useState(false);

  const onFinish = () => {
    setIsResult(true);
  };

  const onFinishFailed = () => {};

  return (
    <Layout>
      <Content>
        <Row align="middle" className="min-h-screen p-2">
          {isResult ? (
            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 18, offset: 3 }}>
              <Result
                status="success"
                title="Successfully Reset Your Password!"
                extra={[
                  <Button
                    type="primary"
                    key="console"
                    onClick={() => navigate('/login', { replace: true })}
                  >
                    Go To Login
                  </Button>,
                ]}
              />
            </Col>
          ) : (
            <Col
              xs={{ span: 24, offset: 0 }}
              md={{ span: 16, offset: 4 }}
              xl={{ span: 10, offset: 7 }}
              xxl={{ span: 6, offset: 9 }}
            >
              <Card>
                <Title level={2}>Reset Password</Title>
                <Form
                  name="ResetPassword"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  layout="vertical"
                >
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your confirm password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="mb-2" block>
                      Reset Password
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          )}
        </Row>
      </Content>
    </Layout>
  );
};

export default ResetPassword;
