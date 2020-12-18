import React from 'react';

import Accordion from './index';
import DataSheet from '../DataSheet';
import DataRow from '../DataSheet/DataRow';

export default {
  component: Accordion,
  title: 'Accordion',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <>
    <Accordion summary="Marius Schäfer">
      <DataSheet>
        <DataRow label="Vorname" value="Marius" />
        <DataRow label="Nachname" value="Schäfer" />
        <DataRow label="E-Mail" value="marius.schäfer@gmx.de" />
        <DataRow label="Telefon" value="0151 3993 419 70" />
      </DataSheet>
    </Accordion>

    <Accordion summary="Miriam Bühler">
      <DataSheet>
        <DataRow label="Vorname" value="Miriam" />
        <DataRow label="Nachname" value="Bühler" />
        <DataRow label="E-Mail" value="Miriam.Bühler@gmx.de" />
        <DataRow label="Telefon" value="0151 3993 419 70" />
      </DataSheet>
    </Accordion>

    <Accordion summary="Vincent Malf">
      <DataSheet>
        <DataRow label="Vorname" value="Vincent" />
        <DataRow label="Nachname" value="Malf" />
        <DataRow label="E-Mail" value="Vincent.Malf@gmx.de" />
        <DataRow label="Telefon" value="0151 3993 419 70" />
      </DataSheet>
    </Accordion>
  </>
);
