const { off } = require('process')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    project: './tsconfig.eslint.json'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': [1, { code: 140, ignoreUrls: true, ignoreStrings: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'lines-between-class-members': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false
        },
        extendDefaults: true
      }
    ]
  }
}
