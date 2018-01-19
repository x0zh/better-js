module.exports = {
  // 停止冒泡，即停止在父级目录中寻找配置文件
  root: true,

  // ESLint 默认使用 espree 作为其解析器
  // 同时 babel-eslint 也是用得最多的解析器（npm install --save-dev babel-eslint）
  parser: 'babel-eslint',
  // parser 的参数
  parserOptions: {
    // 指定要使用的 ECMAScript 版本，默认值 5
    ecmaVersion: 5,
    // 设置为 script (默认)或 module（如果你的代码是 ECMAScript 模块)
    sourceType: 'module',
    // 指定额外的语言特性，所有选项默认都是 false
    ecmafeatures: {
      // 允许在全局作用域下使用 return 语句
      globalReturn: false,
      // 启用全局 strict 模式
      impliedStrict: false,
      // 启用对实验性的 objectRest/spreadProperties 的支持
      experimentalObjectRestSpread: false
    }
  },

  // 指定环境，每个环境都有自己预定义的全局变量，可以同时指定多个环境，不矛盾
  env: {
    browser: true
  },

  // 对于那些我们自定义的全局变量，可以用 globals 指定
  // 设置每个变量等于 true 允许变量被重写，或 false 不允许被重写
  globals: {
  },

  // 具体规则配置
  // off 或 0   -- 关闭规则
  // warn 或 1  -- 开启规则，警告级别(不会导致程序退出)
  // error 或 2 -- 开启规则，错误级别(当被触发的时候，程序会退出)
  rules: {
    // 要求使用 === 和 !==
    eqeqeq: ['error', 'always', {"null": "ignore"}],
    // 两个空格
    indent: ['error', 2],
    // 使用单引号
    quotes: ['error', 'single'],
    // 禁止句尾的分号
    semi: ['error', 'never'],
    // 禁止函数圆括号前有个空格
    "space-before-function-paren": ["error", "never"],
    // 箭头函数的参数使用园括号
    'arrow-parens': 0
  },

  extends: [
    'standard'
  ]
}