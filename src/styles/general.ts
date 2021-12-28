import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.backgroundColor || props.theme.background};
`;

export const Container = styled.View`
  padding: 0 20px;
  flex: 1;
  background-color: ${props => props.backgroundColor || props.theme.background};
`;

export const ContainerScrollView = styled.ScrollView`
  padding: 0 20px;
  flex: 1;
  background-color: ${props => props.backgroundColor || props.theme.background};
`;
