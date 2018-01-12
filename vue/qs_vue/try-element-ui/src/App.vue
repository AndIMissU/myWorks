<template>
  <div id="app">
    <!-- :class="{}" 绑定域名 -->
    <header class="header" :class="{'header-fixed':headerFixed}">
      <el-row>
        <!-- elmentui里面一行分为24列 -->
        <el-col :span="24">
          <el-menu default-active="5" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <div v-show="headerFixed" style="position:relative;height:60px;width:100%"></div>

    <main>
      <div class="main-left">
        <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/activePublic" :class="{'isActive': active}">活动发布</el-menu-item>
          <el-menu-item index="/activeManage" :class="{'isActive': !active}">活动管理</el-menu-item>
        </el-menu>
      </div>

      <div class="main-right">
        <transition name="fade">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import $ from 'jquery'

Vue.use(ElementUI);

export default {
  name: 'app',
  data () {
    return{
      active: true,
      headerFixed: true
    }
  },
  mounted () {
    this.$router.push('/activePublic');
  },
  watch: {
    '$router': function(to, from) {
      if(to.path == '/activePublic') {
        this.active = true;
      } else if (to.path == '/activeManage') {
        this.active = false;
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .el-menu-demo{padding-left: 300px!important;}
/* 主内容区 */
main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
main .el-menu{background-color: transparent!important;}
/*  */
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{ color:#20a0ff; }
/* 单选框 */
.el-form-item .el-radio+.el-radio {
  margin-left: 30px!important;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

</style>
