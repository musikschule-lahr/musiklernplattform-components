import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemePlayground } from 'storybook-addon-theme-playground';
import { createGlobalStyle } from 'styled-components';

import MyThemeProvider from '../src/ThemeProvider';
import themes from '../src/themes';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Brandon Grotesque", sans-serif;
  }
`;

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
      <div id="modal-root" />
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);

addDecorator(withThemePlayground({
  theme: themes.defaultTheme,
  provider: MyThemeProvider,
}));
