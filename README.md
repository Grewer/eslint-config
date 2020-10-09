# eslint-config

> This Project comes from https://github.com/sishuguojixuefu/eslint-config

Usage:

```
yarn add -D @grewer/eslint
// or npm i -D @grewer/eslint


g-eslint
// if react-native project use:
// g-eslint -rn
```


package.json :
```
    "eslintConfig": {
        "env": {
              "browser": true
        },
        // or in rn project  "react-native/react-native": true
        "extends": ["./node_modules/@grewer/eslint"]
    },
    "eslintIgnore": ["!.eslintrc.js", "!.prettierrc.js"],
    "prettier": "@grewer/eslint/.prettierrc.js"
```
