import React from 'react';
import {AppRegistry} from 'react-native';

import Routes from './src/routes/Routes';

const Jobs = () => {
  return <Routes />;
};

AppRegistry.registerComponent('jobs', () => Jobs);
