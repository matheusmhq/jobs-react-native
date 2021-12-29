import styled from 'styled-components/native';

// @ts-ignore
import fontSize from '@fontSize';

export const BtnJob = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${fontSize.RFValue(14)}px;
  color: ${props => props.theme.colors.color};
  line-height: 24px;
  font-weight: bold;
`;

export const ContainerLabels = styled.View`
  margin: 10px 0;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ItemLabel = styled.View`
  margin-right: 10px;
  padding: 6px;
  border-radius: 6px;
  margin-bottom: 6px;
  border-width: 1px;
  border-color: #ddd;
  color: ${props => props.theme.colors.color};
`;

export const Label = styled.Text`
  font-size: ${fontSize.RFValue(10)}px;
  font-weight: bold;
  color: ${props => props.theme.colors.color};
`;

export const TextInfo = styled.Text`
  font-size: ${fontSize.RFValue(10)}px;
  color: ${props => props.theme.colors.color};
`;
