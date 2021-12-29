import {Dimensions, Platform} from 'react-native';

export const widthScreen = Dimensions.get('window').width;
export const heightScreen = Dimensions.get('window').height;
export const platform = Platform.OS;
