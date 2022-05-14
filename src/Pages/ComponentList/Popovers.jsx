import { Popover, Button, Divider, Card } from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

const Popovers = () => (
  <>
    <Divider orientation="left"> Popovers </Divider>
    <Card className="flex justify-center">
      <div className="demo">
        <div style={{ marginLeft: buttonWidth + 30, whiteSpace: 'nowrap' }}>
          <Popover placement="topLeft" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>TL</Button>
          </Popover>
          <Popover placement="top" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>Top</Button>
          </Popover>
          <Popover placement="topRight" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>TR</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth, float: 'left' }}>
          <Popover placement="leftTop" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>LT</Button>
          </Popover>
          <Popover placement="left" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>Left</Button>
          </Popover>
          <Popover placement="leftBottom" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>LB</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth, marginLeft: (buttonWidth + 10) * 4 + 24 }}>
          <Popover placement="rightTop" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>RT</Button>
          </Popover>
          <Popover placement="right" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>Right</Button>
          </Popover>
          <Popover placement="rightBottom" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>RB</Button>
          </Popover>
        </div>
        <div
          style={{ marginLeft: buttonWidth + 30, clear: 'both', whiteSpace: 'nowrap' }}
        >
          <Popover placement="bottomLeft" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>BL</Button>
          </Popover>
          <Popover placement="bottom" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>Bottom</Button>
          </Popover>
          <Popover placement="bottomRight" title={text} content={content} trigger="click">
            <Button style={{ width: buttonWidth }}>BR</Button>
          </Popover>
        </div>
      </div>
    </Card>
  </>
);

export default Popovers;
