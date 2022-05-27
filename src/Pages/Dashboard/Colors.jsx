import React from 'react';
import { Card, Col, Row } from 'antd';
import { ColorBlock } from '../../Components';
import { getBgColorHex } from '../../Utils';

const colorSemanticArr = ['primary', 'success', 'info', 'warning', 'error'];
const colorArr = [
  'red',
  'volcano',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'blue',
  'geekblue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];
const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Colors = () => {
  const [colorValues, setColorValues] = React.useState({});

  React.useEffect(() => {
    const obj = {};
    colorArr.forEach((color) => {
      levels.forEach((level) => {
        obj[`bg-${color}-${level}`] = getBgColorHex(`bg-${color}-${level}`);
      });
    });
    obj['bg-primary'] = getBgColorHex('bg-primary');
    obj['bg-success'] = getBgColorHex('bg-success');
    obj['bg-info'] = getBgColorHex('bg-info');
    obj['bg-warning'] = getBgColorHex('bg-warning');
    obj['bg-error'] = getBgColorHex('bg-error');
    setColorValues(obj);
  }, []);

  return (
    <Card title="Colors">
      <Row gutter={[16, 16]}>
        {colorSemanticArr.map((color) => (
          <Col key={`semantic-${color}`} xs={24} md={12} xl={6} xxl={4}>
            <ColorBlock
              id={`bg-${color}`}
              className={`flex-col p-4 h-24 text-white bg-${color}`}
            >
              <span>{color}</span>
              <span className="font-bold">{colorValues[`bg-${color}`]}</span>
            </ColorBlock>
          </Col>
        ))}
      </Row>
      <br />
      <Row gutter={[16, 16]}>
        {colorArr.map((color) => (
          <Col key={`col-${color}`} xs={24} md={12} xl={6} xxl={4}>
            <ColorBlock.Group>
              {levels.map((level) => (
                <ColorBlock
                  key={`bg-${color}-${level}`}
                  id={`bg-${color}-${level}`}
                  className={`flex justify-between bg-${color}-${level} ${
                    level > 5 ? 'text-white dark:text-black' : ''
                  }`}
                >
                  <span>
                    {color}-{level}
                  </span>
                  <span>{colorValues[`bg-${color}-${level}`]}</span>
                </ColorBlock>
              ))}
            </ColorBlock.Group>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default Colors;
