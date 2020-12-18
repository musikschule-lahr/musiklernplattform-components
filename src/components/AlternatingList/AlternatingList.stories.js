import React from 'react';
import { action } from '@storybook/addon-actions';

import AlternatingList from './index';
import AlternatingListItem from './AlternatingListItem';

export const actionsData = {
  onClickHandler: (index) => action(`onClickHandler ${index}`),
};

const listItems = Array.from({ length: 20 }, (_, i) => (
  <AlternatingListItem
    key={i}
    col1={`List Item ${i + 1}`}
    col2={`List Index ${i}`}
    col3="Column 3"
    onClick={actionsData.onClickHandler(i)}
  />
));

export default {
  component: AlternatingList,
  title: 'AlternatingList',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <AlternatingList>{listItems}</AlternatingList>
);
