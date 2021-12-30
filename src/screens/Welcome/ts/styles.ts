import styled from 'styled-components/native';

// @ts-ignore
import fontSize from '@fontSize';

export const HeaderTitle = styled.Text`
  font-size: ${fontSize.RFValue(16)}px;
  color: ${props => props.theme.colors.color};
  margin: 20px 0;
  font-weight: bold;
`;

export const BtnOrg = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ImageOrg = styled.Image`
  height: 100px;
`;

export const TitleOrg = styled.Text`
  margin-top: 20px;
  font-size: ${fontSize.RFValue(16)}px;
  color: ${props => props.theme.colors.color};
`;
