const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false
  },

  lintOnSave: false,

  parallel: 4,

  transpileDependencies: [
    'vuetify',
    /ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/
  ],

  assetsDir: 'static',
  publicPath: '/',

  pwa: {
    name: 'What the Duck',
    themeColor: '#d32f2f',
    msTileColor: '#3A3E41FF',
    manifestPath: 'manifest.json',
    manifestOptions: {
      id: 'WHAT-THE-DUCK',
      description: '',
      display: 'fullscreen',
      orientation: 'landscape',
      backgroundColor: '#212428',
      start_url: '/',
      icons: [
        {
          src: './static/img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './static/img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './static/img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './static/img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  }

})
