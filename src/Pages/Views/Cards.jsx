import React from 'react';
import { Avatar, Card, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Cards = () => (
  <Card title="Cards">
    <Space direction="vertical" className="w-full" wrap>
      <Space wrap>
        <Card
          title="Default size card"
          extra={<a href="#Cards">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          title="Small size card"
          extra={<a href="#Cards">More</a>}
          style={{ width: 300 }}
          size="small"
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <Space wrap>
        <Card
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
          hoverable
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            title="Card title"
            description="This is the description"
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          />
        </Card>
      </Space>
    </Space>
  </Card>
);

export default Cards;
