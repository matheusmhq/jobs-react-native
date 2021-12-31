import React from 'react';
import {ContainerError, TextError} from './ts/styles';

// @ts-ignore
import {msgError} from '@constants';

interface Props {
  msg: string;
  customStyles: any;
}

const MsgError: React.FC<Props> = ({msg, customStyles}) => {
  return (
    <ContainerError style={customStyles}>
      <TextError>{msg || msgError}</TextError>
    </ContainerError>
  );
};

export default MsgError;
