import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './stacks/Stacks';
// @ts-ignore
import Welcome from 'screens/Welcome';
// @ts-ignore
import Jobs from 'screens/Jobs';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={({route}) => ({title: route.params.org.title})}
          name="Jobs"
          component={Jobs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
