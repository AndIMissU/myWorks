<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont">&#xe660;</text>
            <text class="bar-txt">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <text class="bar-ic iconfont">&#xe744;</text>
            <text class="bar-txt">专题</text>
        </div>
        <div class="bar-item" @click="tabTo('class')">
            <text class="bar-ic iconfont">&#xe605;</text>
            <text class="bar-txt">分类</text>
        </div>
        <div class="bar-item" @click="tabTo('shop')">
            <text class="bar-ic iconfont">&#xe61a;</text>
            <text class="bar-txt">购物车</text>
        </div>
        <div class="bar-item" @click="tabTo('my')">
            <text class="bar-ic iconfont">&#xe639;</text>
            <text class="bar-txt">个人</text>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
      tabTo (key) {
          console.log(key);
      }
  }
}
</script>


<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 90px;
        /* 默认弹性布局 */
        /* 不要换行 */
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item {
        flex: 1;
    }
    .bar-txt, .bar-ic {
        color: #666666;
        text-align: center;
    }
    .bar-active {
        color: #b4282d;
    }
    .bar-ic {
        padding-top: 14px;
        font-size: 38px;
    }
    .bar-txt {
        padding-top: 2px;
        font-size: 22px;
    }
</style>


