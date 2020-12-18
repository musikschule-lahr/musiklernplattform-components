import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';

import BackIcon from '@iconify/icons-ion/chevron-back-outline';

import TextButton from './index';

export default {
  component: TextButton,
  title: 'TextButton',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClickHandler: action('onClickHandler'),
};

export const Default = () => (
  <TextButton
    disabled={boolean('Disabled', false)}
    onClickHandler={actionsData.onClickHandler}
    title={text('Title', 'Klick mich!')}
  />
);

export const WithIcon = () => (
  <TextButton
    icon={BackIcon}
    iconPosition={select('Icon Position', ['left', 'right'])}
    disabled={boolean('Disabled', false)}
    onClickHandler={actionsData.onClickHandler}
    title={text('Title', 'Zurück')}
  />
);
