import React from 'react';

import orgs from './ts/orgs';
// @ts-ignore
import {SafeArea, ContainerScrollView} from '@general';
import {HeaderTitle, BtnOrg, TitleOrg, ImageOrg} from './ts/styles';

const placeholder = require('assets/images/placeholder.png');

interface Navigation {
  navigation: any;
}

const Welcome: React.FC<Navigation> = ({navigation}) => {
  function goToJobs(item) {
    navigation.navigate('Jobs', {org: item});
  }

  return (
    <SafeArea>
      <ContainerScrollView>
        <HeaderTitle>Escolha um repositório para ver as vagas</HeaderTitle>
        {orgs.map((item, index) => {
          return (
            <BtnOrg key={index} onPress={() => goToJobs(item)}>
              <ImageOrg
                source={item.image || placeholder}
                resizeMode={'contain'}
              />
              <TitleOrg>{item.title}</TitleOrg>
            </BtnOrg>
          );
        })}
      </ContainerScrollView>
    </SafeArea>
  );
};

export default Welcome;
