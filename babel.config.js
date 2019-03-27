module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // ['transform-remove-console'],
    [
      "babel-plugin-transform-builtin-extend",
      {
        globals: ["Error", "Array"]
      }
    ],
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
          theme: './src/theme',
          components: './src/components',
          constants: './src/constants',
          containers: './src/containers',
          examples: './src/examples',
          libraries: './src/libraries',
          navigations: './src/navigations',
          state: './src/state',
          translations: './src/translations',
          utilities: './src/utilities'
        }
      }
    ]
  ]
};
