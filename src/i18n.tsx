import { useEffect, useState } from 'react'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'

// 从 JSON 文件导入翻译
import en from '../locales/en.json'
import zhCN from '../locales/zh-CN.json'

const SUPPORTED_LANGUAGES = ['zh-CN', 'en']

const detectLanguage = () => {
  try {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
      return savedLanguage
    }
  } catch {}

  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('zh')) {
    return 'zh-CN'
  }
  return 'en'
}

// 初始化 i18n
i18n
  .use(initReactI18next)
  .init({
    lng: detectLanguage(),
    fallbackLng: 'zh-CN',
    supportedLngs: SUPPORTED_LANGUAGES,
    
    resources: {
      'zh-CN': { translation: zhCN },
      'en': { translation: en }},
    
    interpolation: {
      escapeValue: false},
    
    react: {
      useSuspense: false}})

// I18nProvider 组件
function I18nProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export { I18nProvider }
export default i18n
