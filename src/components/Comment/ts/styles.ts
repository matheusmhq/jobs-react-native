import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

// @ts-ignore
import fontSize from '@fontSize';

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Avatar = styled(FastImage)`
  width: 36px;
  height: 36px;
  border-radius: 100px;
  margin-right: 10px;
`;

export const ContainerUserInfo = styled.View``;

export const Name = styled.Text`
  font-size: ${fontSize.RFValue(12)}px;
  color: ${props => props.theme.colors.color};
  font-weight: bold;
`;

export const Date = styled.Text`
  font-size: ${fontSize.RFValue(8)}px;
  color: ${props => props.theme.colors.color};
`;

export const ContainerComment = styled.View`
  background-color: ${props => props.theme.colors.primary};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 12px;
`;

export const Body = styled.Text`
  font-size: ${fontSize.RFValue(12)}px;
  line-height: 20px;
  color: ${props => props.theme.colors.color};
`;

export const BtnRedirectToGithub = styled.TouchableOpacity`
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => props.theme.colors.background};
  padding: 4px;
  border-radius: 4px;
`;

export const TextRedirectToGithub = styled.Text`
  font-size: ${fontSize.RFValue(10)}px;
  color: ${props => props.theme.colors.color};
`;
