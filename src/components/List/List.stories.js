import React from 'react';

import ForwardIcon from '@iconify/icons-ion/chevron-forward-outline';

import List from './index';
import ListItem from './ListItem';
import ListDivider from './ListDivider';

const listItems = Array.from({ length: 20 }, (_, i) => (
  <ListItem key={i}>{`List Item ${i + 1}`}</ListItem>
));

const listItemsWithIcons = Array.from({ length: 20 }, (_, i) => (
  <ListItem key={i} icon={ForwardIcon}>{`List Item ${i + 1}`}</ListItem>
));

const listItemsWithDivider = Array.from({ length: 40 }, (_, i) => (
  i % 5 === 0
    ? <ListDivider key={i} label={`Divider ${(i / 5) + 1}`} />
    : <ListItem key={i} icon={ForwardIcon}>{`List Item ${i - Math.floor(i / 5)}`}</ListItem>
));

export default {
  component: List,
  title: 'List',
};

export const Default = () => (
  <List>{listItems}</List>
);

export const WithIcons = () => (
  <List>{listItemsWithIcons}</List>
);

export const WithDivider = () => (
  <List>{listItemsWithDivider}</List>
);
