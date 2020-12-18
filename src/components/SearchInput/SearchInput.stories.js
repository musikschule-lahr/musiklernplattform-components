import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import SearchInput from './index';

export default {
  component: SearchInput,
  title: 'SearchInput',
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
    <SearchInput
      value={value}
      disabled={boolean('Disabled', false)}
      placeholder={text('Placeholder', 'Werk, Komponist oder Suchbegriff eingeben')}
      onChangeHandler={onChangeHandler}
      inputStyle={{ width: 400 }}
    />
  );
};
