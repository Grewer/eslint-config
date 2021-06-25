const importRules = require('../rules/import.js')
const airbnbRules = require('../rules/airbnb.js')

module.exports = {
  files: ['*.js'],
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@babel/eslint-parser',
  rules: {...importRules, ...airbnbRules},
  plugins: []
}
