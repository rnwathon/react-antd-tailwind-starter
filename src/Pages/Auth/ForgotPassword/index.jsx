import React from 'react';
import { Button, Card, Col, Form, Input, Layout, Result, Row, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { LeftOutlined, MailOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isResult, setIsResult] = React.useState(false);

  const onFinish = () => {
    setIsResult(true);
  };

  const onFinishFailed = () => {};

  return (
    <Layout>
      <Content>
        <Row align="middle" className="min-h-screen p-5">
          {isResult ? (
            <Col xs={{ span: 24, offset: 0 }} sm={{ span: 18, offset: 3 }}>
              <Result
                status="success"
                title="Successfully Requested to Reset Password!"
                subTitle="Please check your e-mail for the link to reset your password"
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
                <Title level={2}>Forgot Password</Title>
                <Paragraph type="secondary">
                  Enter your e-mail and we'll send you a link to reset your password
                </Paragraph>
                <Form
                  name="ForgotPassword"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  layout="vertical"
                >
                  <Form.Item
                    label="E-Mail"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your email!',
                      },
                    ]}
                  >
                    <Input prefix={<MailOutlined />} />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Submit
                    </Button>
                  </Form.Item>

                  <Row justify="center">
                    <Link to="/login">
                      <Text type="secondary">
                        <LeftOutlined /> Back to Login
                      </Text>
                    </Link>
                  </Row>
                </Form>
              </Card>
            </Col>
          )}
        </Row>
      </Content>
    </Layout>
  );
};

export default ForgotPassword;
