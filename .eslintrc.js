module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "no-console": process.env.NODE_ENV ==="development"?["warn",{"allow":["warn", "error"]}]:["error",{"allow":["warn", "error"]}],
    "vue/no-unused-vars": "off",
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "no-unreachable": "off",
    'indent': ['warn', 2],
  }
}
