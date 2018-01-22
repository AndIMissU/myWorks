<template>
<div>
  <p>{{ msg }}</p>
  <p>newsId: {{ $route.params.newsId }}</p>
  <p>newsTitle: {{ $route.params.newsTitle }}</p>
</div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Params 配置'
    }
  }
}
</script>
<style>

</style>


