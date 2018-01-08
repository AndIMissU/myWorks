<template>
  <div class="app-wrapper">
    <router-view></router-view>

  </div>
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    color: #333333;
  }
</style>
<style scoped>
  .app-wrapper {
    background-color: #f4f4f4;
  }
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>


<script>
// export default {

// }
  import util from './assets/util';
  import tabBar from './assets/components/tabBar.vue';
  import Header from './assets/components/Header.vue';
  import TopChannel from './assets/components/TopChannel.vue';
  export default {
    "components": {
      'tab-bar': tabBar,
      'home-header':Header,
      'top-channel':TopChannel
    },
    // 生命周期 组件创建了之后
    created () {
      util.initIconfont();
    },
    data: {
      
    },
    methods: {
      
    }
  }
</script>