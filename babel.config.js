module.exports = {
  plugins: [
    "transform-class-properties", 
    "@babel/plugin-proposal-class-properties"
  ],
  presets: [
    'module:metro-react-native-babel-preset',
    'babel-preset-expo'
  ]
};
