module.exports = {
  'global-require': 0,
  'lines-between-class-members': [
    // 要求或禁止在类成员之间出现空行
    2,
    'always',
    {
      exceptAfterSingleLine: true, //  跳过对单行类成员之后的空行的检查
    },
  ],
  'no-useless-constructor': 1,
  'max-classes-per-file': 0,
  'class-methods-use-this': 0,
  'import/no-cycle': 0,
  'consistent-return': 0,
  'no-console': 0,
  'no-plusplus': 0,
  'no-return-assign': 0,
  'no-useless-catch': 0,
  'no-nested-ternary': 0, // 禁止使用嵌套的三元表达式
  'no-param-reassign': [2, { props: false }], // 禁止对函数参数再赋值
  'no-restricted-globals': 0, // 禁用特定的全局变量
  'no-use-before-define': 0, // 禁止定义前使用
  'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
  'no-unused-expressions': 0, // 禁止未使用过的表达式
  'no-unused-vars': 1,
  'prefer-destructuring': [
    2,
    {
      array: false,
      object: true,
    },
  ],
  'default-case': 0,
  'semi': 0, // 结尾添加分号
  'max-len': 0, // 限制一行代码的最长长度
  'object-curly-newline': 0, // 对象需要不在同一行
  'arrow-parens': 0,  // 箭头行数 参数必须有括号
  'comma-dangle': 0, // 末尾的逗号去除
  'eqeqeq': 2, // 强制使用 === 和 !==
  'no-else-return': 1, // 禁止 if 语句中 return 语句之后有 else 块
  'wrap-iife': 2, // 要求 IIFE 使用括号括起来
  'no-shadow': 'off', // ts 不能写 enum 的问题
  'space-before-function-paren': 0,
  'indent': 'off', // 空格问题  prettier 和 eslint 冲突
  'no-confusing-arrow': 0, // 函数体必须加括号( 与 prettier 冲突
  'function-paren-newline': 0, // 结尾括号不能在新的一行
  'implicit-arrow-linebreak': 0, // 箭头函数右边不换行
  'operator-linebreak': 0, // 当一条语句太长不能放在一行时，换行符一般插入到分离表达式的操作符后面 (和 prettier 冲突)
  'arrow-body-style': 0, // 不强制缩写函数的函数体
}
