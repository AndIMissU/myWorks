<template>
  <div>
    <h2>{{ msg }}</h2>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'I am Hi page'
    }
  }
}
</script>

<style scoped>

</style>
