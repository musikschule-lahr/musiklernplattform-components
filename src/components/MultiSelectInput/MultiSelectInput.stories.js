import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import MultiSelectInput from './index';

const optionsData = Array.from({ length: 6 }, (_, i) => (
  { key: i + 1, value: `Option #${i + 1}`, selected: false }
));

export default {
  component: MultiSelectInput,
  title: 'Multi Select Input',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChangeHandler: action('onChangeHandler'),
};

export const Default = () => {
  const [options, setOptions] = useState(optionsData);

  function onChangeHandler(changedOption) {
    const newOptions = options.map((option) => ({
      ...option,
      selected: option.key === changedOption.key ? !option.selected : option.selected,
    }));

    setOptions(newOptions);
    actionsData.onChangeHandler(changedOption.key, newOptions);
  }

  return (
    <MultiSelectInput
      options={options}
      onChangeHandler={onChangeHandler}
      placeholder={text('Placeholder', 'Keine Auswahl...')}
      overlayTitle={text('Overlay Title', 'Auswahl')}
    />
  );
};