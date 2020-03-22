const {program} = require('commander');
const fs = require('fs')

program
    .option('-rn, --react-native', 'react-native 项目')

program.parse(process.argv);


let config = {
    "eslintConfig": {
        "extends": ["grewer-eslint-config"]
    },
    "eslintIgnore": ["!.eslintrc.js", "!.prettierrc.js"],
    "prettier": "grewer-eslint-config/.prettierrc.js"
}

if (program.reactNative) {
    config.eslintConfig.env = {
        "react-native/react-native": true
    }
}


function getPackageJson() {
    var _packageJson = fs.readFileSync('./package.json')
    return JSON.parse(_packageJson)
}

let packData = getPackageJson()


function writePackageJson(packData) {
    console.log('----------------------1. 开始修改package.json文件')
    for (let key in config) {
        packData[key] = config[key]
    }
    fs.writeFile('./package.json', JSON.stringify(packData), function (err) {
        if (err) console.error(err);
        console.log('--修改package.json文件完毕，eslint 更新为默认值')
    });
}

writePackageJson()
