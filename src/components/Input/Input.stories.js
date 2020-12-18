import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Input from './index';

export default {
  component: Input,
  title: 'Input',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClearHandler: action('onClearHandler'),
  onChangeHandler: action('onChangeHandler'),
};

export const Default = () => {
  const [value, setValue] = useState('');

  function onChangeHandler(_value) {
    actionsData.onChangeHandler(_value);
    setValue(_value);
  }

  function onClearHandler() {
    actionsData.onClearHandler();
    setValue('');
  }

  return (
    <Input
      value={value}
      clearButton={boolean('Clear Button', false)}
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', 'Placeholder')}
      onChangeHandler={onChangeHandler}
      onClearHandler={onClearHandler}
    />
  );
};

export const WithError = () => {
  const [value, setValue] = useState('');

  function onChangeHandler(_value) {
    actionsData.onChangeHandler(_value);
    setValue(_value);
  }

  function onClearHandler() {
    actionsData.onClearHandler();
    setValue('');
  }

  return (
    <Input
      value={value}
      error={text('Error', 'Error: Wrong password')}
      clearButton={boolean('Clear Button', false)}
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', 'Placeholder')}
      onChangeHandler={onChangeHandler}
      onClearHandler={onClearHandler}
    />
  );
};
