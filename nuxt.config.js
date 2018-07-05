const isBot = require('isbot');
module.exports = {
  /*
  ** Headers of the page
  */
  loadingIndicator: {
    name: 'pulse',
    color: 'red',
    background: 'white'
  },
  serverMiddleware: [
    {
      handler(req, res, next){
        res.spa = !isBot(req.headers['user-agent']);
        next();
      }
    }
  ],
  router: {
    extendRoutes (routes, resolve) {
      routes.push(
        {
          name: 'Home',
          path: '/',
          component: resolve('pages')
        },
        {
          path: '/:slug-p:id(\\d+).html',
          name: 'ProductDetail',
          component: resolve('pages/ProductDetail')
        },
        {
          path: '/:slug-news:id(\\d+).html',
          name: 'NewsDetail',
          component: resolve('pages/NewsDetail')
        },
        {
          path: '/tin-tuc',
          name: 'News',
          component: resolve('pages/News')
        },
        {
          path: '/search',
          name: 'Search',
          component: resolve('pages/Search')
        },
        {
          path: '/:category',
          name: 'Category',
          component: resolve('pages/Category')
        }
      )
    }
  },
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // proxyHeaders: false
  },
  mode: 'default',
  head: {
    title: 'Dược phẩm an dược',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css' ,href: '/lib/jquery-ui.min.css' },
      { rel: 'stylesheet', type: 'text/css' ,href: '/lib/slick/slick.css' },
      { rel: 'stylesheet', type: 'text/css' ,href: '/lib/slick/slick-theme.css' },
      { rel: 'stylesheet', type: 'text/css' ,href: '/css/style.css' },
    ],
    script: [
      { src: "/lib/jquery.min.js" },
      { src: "/lib/slick/slick.js" },
      { src: "/lib/jquery-ui.min.js" },
      { src: "/js/config.js" },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'red', height: '5px' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
