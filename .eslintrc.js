module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/typescript/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: "latest"
    },
    plugins: ["@typescript-eslint", "vue"],
    rules: {
      // 可以根据项目需求添加自定义规则
    }
}