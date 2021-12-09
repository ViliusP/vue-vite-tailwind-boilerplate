module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'layer']
      }
    ],
    'block-no-empty': null,
    'unit-whitelist': ['em', 'rem', 's']
  }
}
