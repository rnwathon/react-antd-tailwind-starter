import React from 'react';
import { Card, TreeSelect, Space } from 'antd';

const { TreeNode, SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

const TreeSelects = () => (
  <Card title="TreeSelects">
    <Space direction="vertical" className="w-1/3" wrap>
      <TreeSelect
        style={{ width: '100%' }}
        placeholder="Please select"
        treeDefaultExpandAll
        allowClear
      >
        <TreeNode value="parent 1" title="parent 1">
          <TreeNode value="parent 1-0" title="parent 1-0">
            <TreeNode value="leaf1" title="leaf1" />
            <TreeNode value="leaf2" title="leaf2" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1">
            <TreeNode value="leaf3" title="leaf3" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
      <TreeSelect
        style={{ width: '100%' }}
        placeholder="Please select"
        showCheckedStrategy={SHOW_PARENT}
        treeData={treeData}
        treeCheckable
      />
    </Space>
  </Card>
);

export default TreeSelects;
