import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Textarea from './index';

export default {
  component: Textarea,
  title: 'Textarea',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChangeHandler: action('onChangeHandler'),
};

export const Default = () => {
  const [value, setValue] = useState('');

  function onChangeHandler(_value) {
    actionsData.onChangeHandler(_value);
    setValue(_value);
  }

  return (
    <Textarea
      value={value}
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', 'Placeholder')}
      onChangeHandler={onChangeHandler}
    />
  );
};

export const WithError = () => {
  const [value, setValue] = useState('');

  function onChangeHandler(_value) {
    actionsData.onChangeHandler(_value);
    setValue(_value);
  }

  return (
    <Textarea
      value={value}
      error={text('Error', 'Text too short.')}
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', 'Placeholder')}
      onChangeHandler={onChangeHandler}
    />
  );
};
