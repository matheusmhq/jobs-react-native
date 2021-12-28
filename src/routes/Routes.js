import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './stacks/Stacks';
import Welcome from 'screens/Welcome';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
