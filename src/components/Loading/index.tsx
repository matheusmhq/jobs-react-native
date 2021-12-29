import React from 'react';
import {ContainerLoading, ActivityIndicatorCustom} from './ts/styles';

interface Props {
  size: number;
  customStyles: any;
}

const Loading: React.FC<Props> = ({customStyles}) => {
  return (
    <ContainerLoading style={customStyles}>
      <ActivityIndicatorCustom size={30} />
    </ContainerLoading>
  );
};

export default Loading;
