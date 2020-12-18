import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import RecordFile from './index';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default {
  component: RecordFile,
  title: 'RecordFile',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const actionsData = {
  onClickHandler: action('onClickHandler'),
};

export const Default = () => (
  <Wrapper>
    <RecordFile
      title={text('Titel', 'Aufnahme vom 10.08.2020')}
      description={(
        <>
          <span>Uhrzeit: 13:13 Uhr</span>
          <br />
          <span>Dauer: 1:04 min</span>
        </>
      )}
      onClickHandler={actionsData.onClickHandler}
    />
  </Wrapper>
);
