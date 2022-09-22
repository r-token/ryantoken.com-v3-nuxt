import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss'
  ],
  
  runtimeConfig: {
    public: {
      apiBase: '',
      customApiBase: ''
    }
  },
  
  pageTransition: {'page-fade': true },

  content: {
    highlight: {
      theme: 'one-dark-pro'
    }
  },
  
  image: {
    dir: 'public/'
  },

  vite: {
    plugins: [
      Icons({
        // the feature below is experimental ⬇️
        autoInstall: true
      })
    ]
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
