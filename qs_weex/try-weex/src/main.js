import Vue from 'vue';
import App from './App.vue';
import router from './router.js'

// 实力化
new Vue(Vue.util.extend({
    el: '#root',
    router 
}, App));
router.push('/');