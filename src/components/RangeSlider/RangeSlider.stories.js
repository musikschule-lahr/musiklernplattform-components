import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';

import RangeSlider from './index';

export default {
  component: RangeSlider,
  title: 'RangeSlider',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChangeHandler: action('onChangeHandler'),
};

export const Default = () => {
  const [value, setValue] = useState(50);

  function onChangeHandler(_value) {
    actionsData.onChangeHandler(_value);
    setValue(_value);
  }

  return (
    <RangeSlider
      minValue={number('min Value', 1)}
      maxValue={number('max Value', 100)}
      value={value}
      small={boolean('Small', false)}
      filled={boolean('Filled', true)}
      filledFromCenter={boolean('filledFromCenter', true)}
      onChangeHandler={onChangeHandler}
    />
  );
};
