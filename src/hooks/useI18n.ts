import { useTranslation } from 'react-i18next'
import { changeLanguage, normalizeLanguage } from '../utils/i18nUtils'

export function useI18n() {
  const { t, i18n } = useTranslation()
  
  return {
    t,
    locale: normalizeLanguage(i18n.language) || 'zh-CN',
    setLocale: changeLanguage,
    loading: false}
}
