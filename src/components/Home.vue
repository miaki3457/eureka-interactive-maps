<template>
  <Page id="home">
    <div class="absolute top-0 right-0 p-6 z-50">
      <button 
        @click="changeLanguage('zh-TW')" 
        class="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-l border-r border-gray-600 text-sm"
      >繁體中文</button>
      <button 
        @click="changeLanguage('en')" 
        class="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded-r text-sm"
      >English</button>
    </div>

    <div class="flex-grow flex">
      <div class="flex flex-col justify-center flex-grow">
        <h1 class="text-6xl text-white text-center mb-5">
          {{ translate('FFXIV Interactive Eureka Maps') }}
        </h1>
        
        <div class="sm:w-1/2 w-1/6 flex flex-col self-center justify-center">
          <router-link to="/anemos"
            class="bg-teal-500 hover:bg-teal-700 text-white text-lg text-center font-bold py-4 px-6 mb-2">
            {{ translate('Anemos') }}
          </router-link>

          <router-link to="/pagos"
            class="bg-blue-500 hover:bg-blue-700 text-white text-lg text-center font-bold py-4 px-6 mb-2">
            {{ translate('Pagos') }}
          </router-link>

          <router-link to="/pyros"
            class="bg-red-500 hover:bg-red-700 text-white text-lg text-center font-bold py-4 px-6 mb-2">
            {{ translate('Pyros') }}
          </router-link>

          <router-link to="/hydatos"
            class="bg-pink-500 hover:bg-pink-700 text-white text-lg text-center font-bold py-4 px-6 mb-2">
            {{ translate('Hydatos') }}
          </router-link>

          <router-link to="/Bozjansouthernfront" 
            class="bg-purple-500 hover:bg-purple-700 text-white text-lg text-center font-bold py-4 px-6 mb-2">
            {{ translate('Bozjan Southern Front') }}
          </router-link>
        </div>
      </div>
    </div>
  </Page>
</template>

<script>
  import Page from './Page'
  // 引入 i18n 
  import nameMapping from '../i18n/mapping.json' 
  import i18n from '../i18n/config'

  export default {
    name: 'Home',
    components: {
      Page
    },
    data() {
      return {
        currentLang: i18n.language 
      }
    },
    methods: {
      translate(text) {
        if (this.currentLang !== 'zh-TW') {
          return text;
        }
        return nameMapping[text] || text;
      },
      changeLanguage(lang) {
        i18n.changeLanguage(lang);
        this.currentLang = lang;
      }
    }
  }
</script>