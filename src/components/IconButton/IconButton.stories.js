import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import AddCircleOutlineIcon from '@iconify/icons-ion/add-circle-outline';

import IconButton from './index';

export default {
  component: IconButton,
  title: 'IconButton',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClickHandler: action('onClickHandler'),
};

export const Default = () => (
  <IconButton
    icon={AddCircleOutlineIcon}
    disabled={boolean('Disabled', false)}
    onClickHandler={actionsData.onClickHandler}
  />
);

export const WithLabel = () => (
  <IconButton
    icon={AddCircleOutlineIcon}
    label="Datei hinzufügen"
    disabled={boolean('Disabled', false)}
    onClickHandler={actionsData.onClickHandler}
  />
);
