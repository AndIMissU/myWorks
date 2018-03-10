<template>
  <div>
    <p>Hi, from {{name}}</p>
    <nuxt-link to="/">Back home</nuxt-link>
  </div>
</template>
<script>
export default {
  asyncData() {
    // nuxt 本质是将.vue交给后端渲染
    // webpack server-side-renderer 
    // react next.js
    // .vue 编译成为  html/css/js
    return {
      name: process.static ? 'static': (process.server ? 'server':'client')
    }
  },
  head: {
    title: 'About Page'
  }
}
</script>
<style>

</style>


