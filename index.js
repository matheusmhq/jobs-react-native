import React from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import Routes from './src/routes/Routes';
import themes from 'styles/themes';

const Jobs = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.light;

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

AppRegistry.registerComponent('jobs', () => Jobs);
