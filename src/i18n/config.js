import i18next from 'i18next'

i18next.init({
  // 優先從 localStorage 讀取語言，如果沒有則預設為 'en'
  lng: localStorage.getItem('i18nextLng') || 'en', 
  debug: false,
  resources: {
    
  }
})

export default i18next