<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <hr>
      <h2>1. 路由传参：</h2>
      <router-link to="/">首页</router-link> |
      <router-link to="/Hi">HiPage</router-link> |
      <router-link :to="{name: 'Hi1', params: {username: 'haha',id: '888'}}">Hi 1</router-link> |
      <router-link to="Hi2">Hi 2</router-link>
      <p>{{$route.name}}</p>
      <router-view></router-view>
    </div>
    <div>
      <hr>
      <h2>2. 单页面多路由处理：</h2>
      <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:100px;"></router-view>
      <router-view name="right" style="float:right;width:50%;background-color:lightblue;height:100px;"></router-view>
      <p>&nbsp;</p>
    </div>
    <div>
      <hr>
      <h2>3. 通过Url传递参数：</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/params/65/haha is website">Params</router-link>
      <router-view></router-view>
    </div>
    <div>
      <hr>
      <h2>4. redirect重定向：</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goparams/33/hahahah">goParams</router-link>
      <router-view></router-view>
    </div>
    <div>
      <hr>
      <h2>5. alias别名：</h2>
      <router-link to="/hi3">Hi 1</router-link>
      <router-link to="/hahaha">hahaha</router-link>
      <router-view></router-view>
    </div>
    <div>
      <hr>
      <h2>6. 路由过渡动画：</h2>
      <router-link to="/">Home</router-link>
      <router-link to="/hahaha">hahaha</router-link>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.fade-enter{
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
