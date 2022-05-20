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

const Register = () => {
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
              <Title level={2}>Register</Title>
              <Form
                name="Register"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
              >
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your full name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

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

                <Form.Item
                  name="agreementCheck"
                  valuePropName="checked"
                  rules={[
                    {
                      required: true,
                      message: 'Please check the agreement',
                    },
                  ]}
                >
                  <Checkbox>
                    I have read, understood, and agreed to the{' '}
                    <a href="#"> Terms of Use </a>
                    and the <a href="#"> Privacy Policy </a>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="mb-2" block>
                    Register
                  </Button>
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
                    Already have an account? <Link to="/login"> LOGIN </Link>
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

export default Register;
