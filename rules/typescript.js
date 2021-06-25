module.exports = {
  'no-unused-vars': 0,
  '@typescript-eslint/no-unused-vars': 1, // 禁止未使用的变量
  '@typescript-eslint/camelcase': 0,
  '@typescript-eslint/no-non-null-assertion': 0, // 不禁止使用！的非null断言后缀运算符
  '@typescript-eslint/ban-ts-ignore': 0,
  '@typescript-eslint/no-var-requires': 0, // 除导入语句外，禁止使用require语句
  '@typescript-eslint/no-empty-function': 0, // 禁止空函数
  '@typescript-eslint/explicit-function-return-type': [
    0,
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
    },
  ],
  '@typescript-eslint/no-explicit-any': 0, // 禁止使用any类型
  '@typescript-eslint/no-empty-interface': 1, // 不能有空的 interface
  '@typescript-eslint/explicit-member-accessibility': [2, { accessibility: 'no-public' }], // 在类属性和方法上需要显式可访问性修饰符
  '@typescript-eslint/no-use-before-define': [
    2,
    {
      functions: true,
      classes: true,
      variables: false,
    },
  ], // 在定义变量之前禁止使用变量
  '@typescript-eslint/await-thenable': 2,  // await 必须是有 then 方法的
  '@typescript-eslint/no-confusing-non-null-assertion': 2, // 禁止在可能造成混淆的位置进行非null断言
  "@typescript-eslint/no-namespace": 0, // 禁止使用自定义TypeScript模块和名称空间
  "@typescript-eslint/interface-name-prefix": 0,
  '@typescript-eslint/no-for-in-array': 1, // 禁止使用 for in 循环
  '@typescript-eslint/no-non-null-asserted-optional-chain': 2, // 禁止在可选链表达式之后使用非null断言
  '@typescript-eslint/non-nullable-type-assertion-style': 1, // 在可能存在的情况下，优先使用非空断言而不是显式类型转换
  '@typescript-eslint/prefer-as-const': 1, // 优先使用as const而不是文字类型
  '@typescript-eslint/prefer-for-of': 1, // 如果索引仅用于访问要迭代的数组，则优先使用“ for-of”循环而不是标准的“ for”循环
  '@typescript-eslint/prefer-optional-chain': 1, // 首选使用简洁的可选链表达式，而不是链式逻辑与
  "@typescript-eslint/prefer-string-starts-ends-with": "error" ,// 强制使用String＃startsWith和String＃endsWith代替检查子字符串的其他等效方法
  '@typescript-eslint/no-implied-eval': 2, // 禁止使用类似eval（）的方法
  '@typescript-eslint/explicit-module-boundary-types': 0, // ts每个函数都要显式声明返回值
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/ban-ts-comment': 0 // 使用 ts-ignore 正常
}
