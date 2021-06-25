const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')
const reactRules = require('../rules/react.js')
const typescriptRules = require('../rules/typescript.js')

module.exports = {
  files: ['*.tsx'],
  extends: [
    'airbnb/hooks',
    'airbnb',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...importRules,
    ...airbnbRules,
    ...reactRules,
    ...typescriptRules,
  },
  plugins: []
}
