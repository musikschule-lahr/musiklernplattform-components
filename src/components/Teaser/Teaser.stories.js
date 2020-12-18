import React from 'react';
import { action } from '@storybook/addon-actions';

import Teaser from './index';

export const actionsData = {
  onClickHandler: action('onClickHandler'),
};

export default {
  component: Teaser,
  title: 'Teaser',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Teaser
    title="Ensembles"
    subtitle="Kammermusik"
    cover="https://via.placeholder.com/600x450"
  />
);
