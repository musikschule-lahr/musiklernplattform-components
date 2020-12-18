import React from 'react';
import { Icon } from '@iconify/react';
import StarIcon from '@iconify/icons-ion/ios-star';

import TabNav from './index';
import NavItem from './NavItem';

export default {
  component: TabNav,
  title: 'TabNav',
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <TabNav>
    <NavItem>
      <Icon icon={StarIcon} />
      Mein Büro
    </NavItem>
    <NavItem>
      <Icon icon={StarIcon} />
      Stundenplan
    </NavItem>
    <NavItem>
      <Icon icon={StarIcon} />
      Verwaltung
    </NavItem>
    <NavItem>
      <Icon icon={StarIcon} />
      Meine Projekte
    </NavItem>
    <NavItem>
      <Icon icon={StarIcon} />
      Bibliothek
    </NavItem>
    <NavItem>
      <Icon icon={StarIcon} />
      Suche
    </NavItem>
  </TabNav>
);
