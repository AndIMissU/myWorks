<template>
  <div id="app">
    <h3>{{$t('login.title')}}</h3>
    <lang-select class="set-language"></lang-select>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
export default {
  name: 'App',
  components:{
    LangSelect
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
