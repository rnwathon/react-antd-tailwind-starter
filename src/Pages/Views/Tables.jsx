import React from 'react';
import { Table, Switch, Radio, Form, Space, Card } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandable = { expandedRowRender: (record) => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };

const Tables = () => {
  const [state, setState] = React.useState({
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandable,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    top: 'none',
    bottom: 'bottomRight',
  });

  const handleToggle = (prop) => (enable) => {
    setState({ ...state, [prop]: enable });
  };

  const handleSizeChange = (e) => {
    setState({ ...state, size: e.target.value });
  };

  const handleTableLayoutChange = (e) => {
    setState({ ...state, tableLayout: e.target.value });
  };

  const handleExpandChange = (enable) => {
    setState({ ...state, expandable: enable ? expandable : undefined });
  };

  const handleEllipsisChange = (enable) => {
    setState({ ...state, ellipsis: enable });
  };

  const handleTitleChange = (enable) => {
    setState({ ...state, title: enable ? title : undefined });
  };

  const handleHeaderChange = (enable) => {
    setState({ ...state, showHeader: enable ? showHeader : false });
  };

  const handleFooterChange = (enable) => {
    setState({ ...state, footer: enable ? footer : undefined });
  };

  const handleRowSelectionChange = (enable) => {
    setState({ ...state, rowSelection: enable ? {} : undefined });
  };

  const handleYScrollChange = (enable) => {
    setState({ ...state, yScroll: enable });
  };

  const handleXScrollChange = (e) => {
    setState({ ...state, xScroll: e.target.value });
  };

  const handleDataChange = (hasData) => {
    setState({ ...state, hasData });
  };

  const { xScroll, yScroll } = state;

  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }

  const tableColumns = columns.map((item) => ({ ...item, ellipsis: state.ellipsis }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }

  return (
    <Card title="Tables">
      <Form layout="inline" style={{ marginBottom: 24 }}>
        <Space direction="vertical">
          <Space wrap>
            <Form.Item label="Bordered">
              <Switch checked={state.bordered} onChange={handleToggle('bordered')} />
            </Form.Item>
            <Form.Item label="loading">
              <Switch checked={state.loading} onChange={handleToggle('loading')} />
            </Form.Item>
            <Form.Item label="Title">
              <Switch checked={!!state.title} onChange={handleTitleChange} />
            </Form.Item>
            <Form.Item label="Column Header">
              <Switch checked={!!state.showHeader} onChange={handleHeaderChange} />
            </Form.Item>
            <Form.Item label="Footer">
              <Switch checked={!!state.footer} onChange={handleFooterChange} />
            </Form.Item>
            <Form.Item label="Expandable">
              <Switch checked={!!state.expandable} onChange={handleExpandChange} />
            </Form.Item>
            <Form.Item label="Checkbox">
              <Switch
                checked={!!state.rowSelection}
                onChange={handleRowSelectionChange}
              />
            </Form.Item>
            <Form.Item label="Fixed Header">
              <Switch checked={!!yScroll} onChange={handleYScrollChange} />
            </Form.Item>
            <Form.Item label="Has Data">
              <Switch checked={!!state.hasData} onChange={handleDataChange} />
            </Form.Item>
            <Form.Item label="Ellipsis">
              <Switch checked={!!state.ellipsis} onChange={handleEllipsisChange} />
            </Form.Item>
          </Space>

          <Form.Item label="Size">
            <Radio.Group value={state.size} onChange={handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="middle">Middle</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Table Scroll">
            <Radio.Group value={xScroll} onChange={handleXScrollChange}>
              <Radio.Button value={undefined}>Unset</Radio.Button>
              <Radio.Button value="scroll">Scroll</Radio.Button>
              <Radio.Button value="fixed">Fixed Columns</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Table Layout">
            <Radio.Group value={state.tableLayout} onChange={handleTableLayoutChange}>
              <Radio.Button value={undefined}>Unset</Radio.Button>
              <Radio.Button value="fixed">Fixed</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Pagination Top">
            <Radio.Group
              value={state.top}
              onChange={(e) => {
                setState({ ...state, top: e.target.value });
              }}
            >
              <Radio.Button value="topLeft">TopLeft</Radio.Button>
              <Radio.Button value="topCenter">TopCenter</Radio.Button>
              <Radio.Button value="topRight">TopRight</Radio.Button>
              <Radio.Button value="none">None</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Pagination Bottom">
            <Radio.Group
              value={state.bottom}
              onChange={(e) => {
                setState({ ...state, bottom: e.target.value });
              }}
            >
              <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
              <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
              <Radio.Button value="bottomRight">BottomRight</Radio.Button>
              <Radio.Button value="none">None</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Space>
      </Form>
      <Table
        {...state}
        pagination={{ position: [state.top, state.bottom] }}
        dataSource={state.hasData ? data : null}
        columns={tableColumns}
        scroll={scroll}
      />
    </Card>
  );
};

export default Tables;
