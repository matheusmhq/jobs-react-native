import styled from 'styled-components/native';

// @ts-ignore
import fontSize from '@fontSize';

export const Title = styled.Text`
  margin: 20px 0;
  font-weight: bold;
  font-size: ${fontSize.RFValue(20)}px;
  color: ${props => props.theme.colors.color};
`;
