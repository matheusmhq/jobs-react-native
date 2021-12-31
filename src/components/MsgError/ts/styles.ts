import styled from 'styled-components/native';

// @ts-ignore
import fontSize from '@fontSize';

export const ContainerError = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0 20px;
`;

export const TextError = styled.Text`
  color: ${props => props.theme.colors.color};
  font-size: ${fontSize.RFValue(12)}px;
  text-align: center;
`;
