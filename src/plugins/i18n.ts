import { createI18n } from 'vue-i18n'

import type { I18n, Locale, VueI18n, Composer } from 'vue-i18n'

import en from '@/locales/en.json'
import lt from '@/locales/lt.json'
import es from '@/locales/es.json'

type MessageSchema = typeof en
const _I18n = _setupI18n()

export function setupI18n(): I18n {
  return _I18n
}

function _setupI18n(): I18n {
  const options = {
    legacy: false,
    globalInjection: true,
    locale: navigator.language.slice(0, 2) || 'lt',
    fallbackLocale: 'lt',
    messages: {
      en,
      lt,
      es
      // Add new language here
    }
  }
  // Add new language below
  const i18n = createI18n<[MessageSchema], 'en' | 'lt' | 'es'>(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

function setI18nLanguage(i18n: I18n, locale: Locale): void {
  setLocale(i18n, locale)
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html')?.setAttribute('lang', locale)
}

export function setLocale(i18n: I18n, locale: Locale): void {
  if (i18n.mode === 'legacy') {
    ;(i18n.global as unknown as VueI18n).locale = locale
  } else {
    ;(i18n.global as unknown as Composer).locale.value = locale
  }
}

// TODO make key another type
// TODO make params another type
export function translate(i18n: I18n, key: string, params: any): string {
  if (i18n.mode === 'legacy') {
    return (i18n.global as unknown as VueI18n).t(key, params)
  } else {
    return (i18n.global as unknown as Composer).t(key, params)
  }
}

export function getLocale(i18n: I18n): string {
  return i18n.mode === 'legacy' ? (i18n.global as unknown as VueI18n).locale : (i18n.global as unknown as Composer).locale.value
}

export default _I18n
