module.exports = {
  "extends": "standard",
  "plugins": [
    "standard"
  ],
  "env": {
    "mocha": true,
    "node": true
  },
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "quotes": 0,     // 允许使用双引号
    "no-extra-semi": 0,         // disallow unnecessary semicolons
    "semi": 0,        //行末不需要分号结尾,与 golang 一致
    "camelcase": 0,           //由于配置文件中未全部驼峰命名, 所以采用不能强制全部驼峰法命名
    "no-trailing-spaces": 0,        // disallow trailing whitespace at the end of lines
    "space-before-function-paren": [0, "always"]//函数定义时括号前面要不要有空格
  }
};
