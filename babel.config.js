module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@api': './src/services/api',
          '@general': './src/styles/general',
          '@constants': './src/functions/constants',
          '@fontSize': './src/styles/fontSize',
          '@utils': './src/functions/utils',
        },
      },
    ],
  ],
};
