module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "single"],
    semi: ["error", "never"],
    indent: ['error', 2]
  },
  "parser": "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};