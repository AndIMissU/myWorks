<template>
  <div id="app">
    <div>姓名:{{name}}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  data() {
    return {
      name:''
    }
 
  },
  beforeCreate() {
    // 在页面渲染前设置数据 太早了 不好 数据还是初始化的数据
    this.$nextTick(() => {
      console.log('aaaa');
      this.name = "hjakda";
    })
  },
  mounted () {
    this.name = '哈哈哈哈哈哈哈';
    console.log("jhkala");
  },
  components: {
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
