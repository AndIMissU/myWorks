module.exports ={
  // 使用axios
  build: {
    vendor: ['axios']
  },
  loading: {
    color: 'lightblue',
    failedColor: '#bf5050',
    duration: 1500
  },
  head: {
    title: 'Nuxt vue blog'
  },
  generate: {
    routes: [
      '/posts/1'
    ]
  }
}

// module.exports = {
//   /*
//   ** Headers of the page
//   */
//   head: {
//     title: 'try-nuex',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: 'Nuxt.js project' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },
//   /*
//   ** Customize the progress bar color
//   */
//   loading: { color: '#3B8070' },
//   /*
//   ** Build configuration
//   */
//   build: {
//     /*
//     ** Run ESLint on save
//     */
//     extend (config, { isDev, isClient }) {
//       if (isDev && isClient) {
//         config.module.rules.push({
//           enforce: 'pre',
//           test: /\.(js|vue)$/,
//           loader: 'eslint-loader',
//           exclude: /(node_modules)/
//         })
//       }
//     }
//   }
// }
