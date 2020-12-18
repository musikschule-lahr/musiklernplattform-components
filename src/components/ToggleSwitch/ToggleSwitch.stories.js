import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import ToggleSwitch from './index';

export default {
  component: ToggleSwitch,
  title: 'ToggleSwitch',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onChange: action('onChange'),
};

export const Default = () => {
  const [checked, setChecked] = useState(true);

  function onChange() {
    actionsData.onChange();
    setChecked(!checked);
  }

  return (
    <ToggleSwitch
      name="default"
      checked={checked}
      disabled={boolean('Disabled', false)}
      onChange={onChange}
    />
  );
};
