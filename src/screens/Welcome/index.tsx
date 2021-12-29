import React from 'react';
import {View, Text} from 'react-native';

import orgs from './ts/orgs';
import {SafeArea, ContainerScrollView} from '@general';
import {BtnOrg, TitleOrg} from './ts/styles';

const Welcome: React.FC = ({}) => {
  return (
    <SafeArea>
      <ContainerScrollView>
        {orgs.map((item, index) => {
          return (
            <BtnOrg key={index}>
              <TitleOrg>{item.title}</TitleOrg>
            </BtnOrg>
          );
        })}
      </ContainerScrollView>
    </SafeArea>
  );
};

export default Welcome;
