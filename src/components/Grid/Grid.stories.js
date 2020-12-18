import React from 'react';

import Row from './Row';
import Col from './Col';

export default {
  component: <div />,
  title: 'Grid',
};

export const Default = () => (
  <div>
    <Row breakpoint="sm">
      <Col><h1>Column 1</h1></Col>
      <Col><h1>Column 2</h1></Col>
    </Row>
  </div>
);
