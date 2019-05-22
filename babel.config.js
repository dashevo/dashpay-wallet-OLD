module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-spread',
      {
        loose: true,
      },
    ],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          hooks: './src/hooks',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
