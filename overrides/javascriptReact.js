const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')
const reactRules = require('../rules/react.js')

module.exports = {
  files: ['*.jsx'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-native/all',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...importRules,
    ...airbnbRules,
    ...reactRules,
  },
  plugins: [
    'import'
  ]
}
