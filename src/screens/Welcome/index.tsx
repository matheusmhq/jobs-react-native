import React from 'react';
import {View, Text} from 'react-native';

import {SafeArea, ContainerScrollView} from '@general';
import {} from './ts/styles';

const Helcome: React.FC = ({}) => {
  return (
    <SafeArea>
      <ContainerScrollView>
        <Text>Welcome</Text>
      </ContainerScrollView>
    </SafeArea>
  );
};

export default Helcome;
