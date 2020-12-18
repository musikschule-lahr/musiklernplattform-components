import React from 'react';
import { action } from '@storybook/addon-actions';

import LibraryHorizontalList from './index';
import LibraryItem from './LibraryItem';

export const actionsData = {
  onClickHandler: action('onClickHandler'),
};

export default {
  component: LibraryHorizontalList,
  title: 'LibraryHorizontalList',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <LibraryHorizontalList>
    <LibraryItem
      title="Romanza andaluza op. 22"
      subtitle="P. de Sarasate"
      cover="https://via.placeholder.com/200"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Cantabile op. 17"
      subtitle="Niccolò Paganini"
      cover="https://via.placeholder.com/200"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Allegro, Violinkonzert a-Moll bla bla"
      subtitle="Johann Sebastian Bach"
      cover="https://via.placeholder.com/200x100"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Melodie"
      subtitle="Peter Iljitsch Tschaikowsky"
      cover="https://via.placeholder.com/100x200"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Im Stile von Albéniz"
      subtitle="Rodion Schtschedrin"
      cover="https://via.placeholder.com/600x333"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Romanza andaluza op. 22"
      subtitle="P. de Sarasate"
      cover="https://via.placeholder.com/200"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Cantabile op. 17"
      subtitle="Niccolò Paganini"
      cover="https://via.placeholder.com/200"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Allegro, Violinkonzert a-Moll"
      subtitle="Johann Sebastian Bach"
      cover="https://via.placeholder.com/200"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Melodie"
      subtitle="Peter Iljitsch Tschaikowsky"
      cover="https://via.placeholder.com/200"
      onClickHandler={actionsData.onClickHandler}
    />
    <LibraryItem
      title="Im Stile von Albéniz"
      subtitle="Rodion Schtschedrin"
      cover="https://via.placeholder.com/200"
      onClickHandler={actionsData.onClickHandler}
    />
  </LibraryHorizontalList>
);
