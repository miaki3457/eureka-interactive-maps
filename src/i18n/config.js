import i18next from 'i18next'

const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18next.init({
  lng: savedLanguage, 
  fallbackLng: 'en',
  debug: false
})

export default i18next