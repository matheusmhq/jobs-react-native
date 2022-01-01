import React from 'react';
import {default as IconVector} from 'react-native-vector-icons/FontAwesome5';

interface Props {
  name: string;
  size: number;
  color: string;
}

const Icon: React.FC<Props> = ({name, size, color}) => {
  return <IconVector name={name} size={size || 12} color={color || 'white'} />;
};

export default Icon;
