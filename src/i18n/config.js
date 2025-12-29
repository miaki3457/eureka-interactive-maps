import i18next from 'i18next'

// 強制在初始化前抓取 localStorage
const savedLng = localStorage.getItem('i18nextLng') || 'en';

i18next.init({
  lng: savedLng, 
  fallbackLng: 'en',
  debug: false,
  detection: {
    order: ['localStorage', 'cookie'],
    caches: ['localStorage']
  }
})

export default i18next