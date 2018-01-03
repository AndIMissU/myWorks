import Vue from 'vue';
// 使用vue 构建webapp 
import App from './App.vue';
// 将app挂在在页面root上  挂在 mount到页面root上 （挂载点）

new Vue({
    el: '#root',
    template: '<App />',
    components: {
        App
    }
})