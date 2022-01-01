import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Stack from './stacks/Stacks';
// @ts-ignore
import Welcome from 'screens/Welcome';
// @ts-ignore
import Jobs from 'screens/Jobs';
// @ts-ignore
import JobDetails from 'screens/JobDetails';
// @ts-ignore
import Icon from 'components/Icon';
// @ts-ignore
import {onShare} from '@utils';
import {ContainerApp, BtnShare} from './ts/styles';

const Routes = () => {
  return (
    <ContainerApp>
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
          <Stack.Screen
            options={({route}) => ({
              title: route.params.job.title,
              headerRight: () => (
                <BtnShare
                  onPress={() => {
                    const {title, html_url} = route.params.job;
                    onShare(title + '-' + html_url);
                  }}
                  hitSlop={{top: 20, right: 20, bottom: 20, left: 20}}>
                  <Icon name="share" color="black" size={20} />
                </BtnShare>
              ),
            })}
            name="JobDetails"
            component={JobDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContainerApp>
  );
};

export default Routes;
