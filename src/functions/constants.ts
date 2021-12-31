import {Dimensions, Platform} from 'react-native';

export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;
export const platform = Platform.OS;
export const splashDelay = 4000;
export const msgError =
  'Não foi possível carregar as informações, verifique sua conexão.';
