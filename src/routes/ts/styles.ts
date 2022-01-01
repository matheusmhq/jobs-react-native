import styled from 'styled-components/native';

export const ContainerApp = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const BtnShare = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
`;
