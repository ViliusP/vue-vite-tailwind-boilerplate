module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    config: 'readable'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    project: './tsconfig.eslint.json'
  },
  plugins: ['@typescript-eslint', 'tailwindcss'],
  extends: [],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // Can't overload function exports with this enabled
        'import/export': 'off'
      }
    }
  ]
}
