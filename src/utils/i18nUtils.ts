import i18n from 'i18next'

export const SUPPORTED_LANGUAGES = ['zh-CN', 'en']

export const normalizeLanguage = (languageCode) => {
  if (!languageCode) return null
  if (SUPPORTED_LANGUAGES.includes(languageCode)) return languageCode
  if (languageCode.toLowerCase().startsWith('zh')) return 'zh-CN'
  if (languageCode.toLowerCase().startsWith('en')) return 'en'
  return null
}

export const changeLanguage = async (languageCode) => {
  const normalizedLanguage = normalizeLanguage(languageCode) || 'zh-CN'
  if (!SUPPORTED_LANGUAGES.includes(normalizedLanguage)) return
  localStorage.setItem('language', normalizedLanguage)
  await i18n.changeLanguage(normalizedLanguage)
}
