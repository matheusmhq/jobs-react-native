import React from 'react';
import {Linking, Alert} from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

import {
  Body,
  ContainerComment,
  ContainerHeader,
  ContainerAvatar,
  Avatar,
  ContainerUserInfo,
  Name,
  Date,
  BtnRedirectToGithub,
  TextRedirectToGithub,
} from './ts/styles';

interface IComment {
  avatar_url: string;
  login: string;
  created_at: string;
  body: string;
  post_owner: boolean;
  html_url?: string;
}

const Comment: React.FC<IComment> = ({
  avatar_url,
  login,
  created_at,
  body,
  post_owner,
  html_url,
}) => {
  function openGithub() {
    Linking.openURL(html_url);
  }

  function question() {
    Alert.alert(
      'Você será redirecionado ao site do github',
      'Deseja realmente continuar?',
      [
        {
          text: 'Não',
        },
        {text: 'Sim', onPress: () => openGithub()},
      ],
    );
  }

  return (
    <ContainerComment>
      <ContainerHeader>
        <ContainerAvatar>
          <Avatar source={{uri: avatar_url}} />
          <ContainerUserInfo>
            <Name>{login}</Name>
            <Date>em {moment(created_at).format('DD/MM/YYYY')}</Date>
          </ContainerUserInfo>
        </ContainerAvatar>

        {post_owner && (
          <BtnRedirectToGithub
            onPress={() => question()}
            hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}>
            <TextRedirectToGithub>ver no github</TextRedirectToGithub>
          </BtnRedirectToGithub>
        )}
      </ContainerHeader>

      <Body>{body}</Body>
    </ContainerComment>
  );
};

export default Comment;
