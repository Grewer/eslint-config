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
    "extends": ["@grewer"]
},
"eslintIgnore": ["!.eslintrc.js", "!.prettierrc.js"],
"prettier": "@grewer/eslint-config/.prettierrc.js"
```

### 注意点 1:
在下载本库时, 最好将原有项目里和 eslint 相关的库全部删除
