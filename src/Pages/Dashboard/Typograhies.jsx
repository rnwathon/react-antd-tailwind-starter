import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const Typograhies = () => (
  <Card title="Typography">
    <Title>h1. Ant Design</Title>
    <Title level={2}>h2. Ant Design</Title>
    <Title level={3}>h3. Ant Design</Title>
    <Title level={4}>h4. Ant Design</Title>
    <Title level={5}>h5. Ant Design</Title>
    <Paragraph>
      In the process of internal desktop applications development, many different design
      specs and implementations would be involved, which might cause designers and
      developers difficulties and duplication and reduce the efficiency of development.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, temporibus
      voluptate, enim molestiae animi placeat harum fugit modi eius, saepe nam quidem
      nulla ullam nesciunt voluptatum adipisci nisi! Voluptate, qui.
    </Paragraph>
    <Paragraph>
      After massive project practice and summaries, Ant Design, a design language for
      background applications, is refined by Ant UED Team, which aims to{' '}
      <Text strong>
        uniform the user interface specs for internal background projects, lower the
        unnecessary cost of design differences and implementation and liberate the
        resources of design and front-end development
      </Text>
      .
    </Paragraph>
    <Paragraph type="secondary">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure porro natus asperiores
      non atque quia! Ullam qui provident est! Dolorum hic sed obcaecati facere totam, et
      qui magni pariatur blanditiis consequatur perferendis quaerat officia sint neque
      repellat vero delectus eveniet quos cum fugit! Quae velit eligendi corrupti est.
      Est, recusandae!
    </Paragraph>
    <Title level={2}>Guidelines and Resources</Title>
    <Paragraph>
      We supply a series of design principles, practical patterns and high quality design
      resources (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people
      create their product prototypes beautifully and efficiently.
    </Paragraph>

    <Paragraph>
      <ul>
        <li>
          <Link href="/docs/spec/proximity">Principles</Link>
        </li>
        <li>
          <Link href="/docs/spec/overview">Patterns</Link>
        </li>
        <li>
          <Link href="/docs/resources">Resource Download</Link>
        </li>
      </ul>
    </Paragraph>

    <Paragraph>
      Press <Text keyboard>Esc</Text> to exit...
    </Paragraph>
  </Card>
);

export default Typograhies;
