import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import DataSheet from './index';
import DataRow from './DataRow';

export default {
  component: DataSheet,
  title: 'DataSheet',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <DataSheet width={text('Width', 'auto')}>
    <DataRow label="Vorname" value="Miriam" />
    <DataRow label="Nachname" value="Bühler" />
    <DataRow label="E-Mail" value="miriam.buehler@gmx.de" />
    <DataRow label="Telefon" value="0151 3993 419 70" />
    <DataRow label="Musikschule" value="Musikschule Lahr" />
    <DataRow label="Benutzername" value="miriam_buehler" />
  </DataSheet>
);
