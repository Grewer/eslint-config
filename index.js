const javascript = require('./overrides/javascript.js')
const javascriptReact = require('./overrides/javascriptReact.js')
const typescript = require('./overrides/typescript.js')
const typescriptReact = require('./overrides/typescriptReact.js')

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:you-dont-need-momentjs/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ["./tsconfig.json"]
  },
  overrides: [
    javascript,
    javascriptReact,
    typescript,
    typescriptReact,
  ],
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
}
