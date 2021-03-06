import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ActivityIndicatorCustom = styled(ActivityIndicator).attrs(
  props => ({
    color: props.theme.colors.color,
  }),
)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
