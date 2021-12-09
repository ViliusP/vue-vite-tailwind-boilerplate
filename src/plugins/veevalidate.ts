import { defineRule, configure } from 'vee-validate'
import { required, email, min, max, confirmed, digits, alpha, between } from '@vee-validate/rules'

import i18n from './i18n'
import { translate } from './i18n'
// The types of validators used in the project
defineRule('alpha', alpha)
defineRule('digits', digits)
defineRule('required', required)
defineRule('confirmed', confirmed)
defineRule('email', email)
defineRule('min', min)
defineRule('between', between)
defineRule('max', max)

defineRule('password_format', (value) => {
  return new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(value)
})

configure({
  generateMessage: (fieldContext) => {
    return translate(i18n, `messages.${fieldContext.rule?.name}`, fieldContext.rule?.params)
  }
})
