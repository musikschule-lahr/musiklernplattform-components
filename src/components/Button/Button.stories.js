import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Button from './index';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClickHandler: action('onClickHandler'),
};

export const Default = () => (
  <Button
    disabled={boolean('Disabled', false)}
    onClickHandler={actionsData.onClickHandler}
    title={text('Title', 'Klick mich!')}
  />
);
