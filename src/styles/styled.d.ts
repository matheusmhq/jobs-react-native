import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundColor: string;
      color: string;
      primary: string;
    };
  }
}
