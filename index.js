import React, {useState, useEffect} from 'react';
import {
  AppRegistry,
  useColorScheme,
  Image,
  View,
  StatusBar,
} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

const jobs_splash = require('assets/images/jobs-splash.png');
import {splashDelay} from '@constants';
import Routes from './src/routes/Routes';
import themes from 'styles/themes';

const Jobs = () => {
  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme] || theme.light;

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, splashDelay);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      {showSplash ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={jobs_splash}
            style={{width: 200}}
            resizeMode={'contain'}
          />
        </View>
      ) : (
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      )}
    </>
  );
};

AppRegistry.registerComponent('jobs', () => Jobs);
