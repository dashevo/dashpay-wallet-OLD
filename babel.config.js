module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ['transform-remove-console'],
    [
      '@babel/plugin-transform-spread',
      {
        loose: true
      }
    ],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          constants: './src/constants',
          containers: './src/containers',
          examples: './src/examples',
          hooks: './src/hooks',
          libraries: './src/libraries',
          navigations: './src/navigations',
          screens: './src/screens',
          state: './src/state',
          themes: './src/themes',
          translations: './src/translations',
          utilities: './src/utilities'
        }
      }
    ]
  ]
};
