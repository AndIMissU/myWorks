<template>
  <div class="container">
    <h1>User Agent</h1>
    <p>{{ userAgent }}</p>
    <p>
      <nuxt-link to="/posts">Blogs</nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  asyncData: ({ req }) => ({
    // user-agent 装的是用户浏览器的版本号和电脑型号和其他
    userAgent: (req ? req.headers['user-agent']:
      (typeof navigator !== undefined ? navigator.userAgent: 'No User Agent(generate)'))
  })
}
</script>
<style>

</style>


