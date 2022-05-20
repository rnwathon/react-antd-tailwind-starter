import React from 'react';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';
import { FacebookFilled, GoogleOutlined, LinkedinFilled } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Text } = Typography;

const Login = () => {
  const onFinish = () => {};
  const onFinishFailed = () => {};

  return (
    <Layout>
      <Content>
        <Row align="middle" className="min-h-screen p-5">
          <Col
            xs={{ span: 24, offset: 0 }}
            md={{ span: 16, offset: 4 }}
            xl={{ span: 10, offset: 7 }}
            xxl={{ span: 6, offset: 9 }}
          >
            <Card>
              <Title level={2}>Login</Title>
              <Form
                name="login"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="mb-2" block>
                    Login
                  </Button>
                  <Row justify="end">
                    <Link to="/forgotPassword">
                      <Text type="secondary"> Forgot Password?</Text>
                    </Link>
                  </Row>
                </Form.Item>

                <Divider> OR </Divider>

                <Row justify="center" className="mb-4">
                  <Space wrap>
                    <Button icon={<GoogleOutlined />} shape="circle" />
                    <Button icon={<FacebookFilled />} shape="circle" />
                    <Button icon={<LinkedinFilled />} shape="circle" />
                  </Space>
                </Row>

                <Row justify="center">
                  <Text type="secondary">
                    Need an account? <Link to="/register"> REGISTER </Link>
                  </Text>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
