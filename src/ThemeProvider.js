import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import themes from './themes';

const MyThemeProvider = ({ theme, children }) => {
  const myTheme = {
    my: { ...themes.defaultTheme, ...theme },
  };

  return (
    <ThemeProvider theme={myTheme}>
      {children}
    </ThemeProvider>
  );
};

MyThemeProvider.defaultProps = {
  theme: {},
};

MyThemeProvider.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

export default MyThemeProvider;
