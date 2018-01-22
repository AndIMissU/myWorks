<template>
  <div>
    <!-- 路由传参：
    <h2>{{ msg }}--{{$route.params.username}}--{{$route.params.id}}</h2> -->

    <!-- 单页面多路由处理 -->
    <h2>{{ msg }}</h2>

  </div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'Hi 1'
    }
  }
}
</script>

<style scoped>

</style>
