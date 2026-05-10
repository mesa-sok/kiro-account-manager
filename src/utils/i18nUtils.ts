import i18n from 'i18next'

export const SUPPORTED_LANGUAGES = ['zh-CN', 'en']

export const normalizeLanguage = (lng) => {
  if (!lng) return null
  if (SUPPORTED_LANGUAGES.includes(lng)) return lng
  if (lng.toLowerCase().startsWith('zh')) return 'zh-CN'
  if (lng.toLowerCase().startsWith('en')) return 'en'
  return null
}

export const changeLanguage = async (lng) => {
  const normalizedLanguage = normalizeLanguage(lng) || 'zh-CN'
  if (!SUPPORTED_LANGUAGES.includes(normalizedLanguage)) return
  localStorage.setItem('language', normalizedLanguage)
  await i18n.changeLanguage(normalizedLanguage)
}
