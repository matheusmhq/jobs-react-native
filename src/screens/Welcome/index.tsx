import React from 'react';
import {View, Text} from 'react-native';

import orgs from './ts/orgs';
import {SafeArea, ContainerScrollView} from '@general';
import {BtnOrgs, TitleOrgs} from './ts/styles';

const Helcome: React.FC = ({}) => {
  return (
    <SafeArea>
      <ContainerScrollView>
        {orgs.map((item, index) => {
          return (
            <BtnOrgs key={index}>
              <TitleOrgs>{item.title}</TitleOrgs>
            </BtnOrgs>
          );
        })}
      </ContainerScrollView>
    </SafeArea>
  );
};

export default Helcome;
