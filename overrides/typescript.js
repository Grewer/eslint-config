const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')
const typescriptRules = require('../rules/typescript.js')

module.exports = {
  files: ['*.ts'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    ...importRules,
    ...airbnbRules,
    ...typescriptRules,
  },
  plugins: []
}
