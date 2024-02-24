export const LANGUAGES = {
  en: 'English',
  es: 'Español',
  ca: 'Català'
} as const

export const DEFAULT_LANG = 'es'

export type Languages = keyof typeof LANGUAGES
export type DefaultLang = typeof DEFAULT_LANG
