<template>
  <div class="wrapper">
      <scroller class="scroller" @click="chooseChannel" 
      scroll-direction="horizontal"
      loadmoreoffset="750px"
      show-scrollbar=false>
        <div class="j-uline" :style="jLPosition" ref="jcLine"></div>
        <text jact="true" class="i-c c-act" ref=actJC>推荐</text>
        <text jact="true" class="i-c">限时购</text>
        <text jact="true" class="i-c">新品</text>
        <text jact="true" class="i-c">居家</text>
        <text jact="true" class="i-c">餐厨</text>
        <text jact="true" class="i-c">配件</text>
        <text jact="true" class="i-c">服装</text>
        <text jact="true" class="i-c">电器</text>
        <text jact="true" class="i-c">洗护</text>
        <text jact="true" class="i-c">杂货</text>
        <text jact="true" class="i-c">饮食</text>
        <text jact="true" class="i-c">婴童</text>
        <text jact="true" class="i-c">志趣</text>
      </scroller>
      <text class="more iconfont">&#xe661;</text>
  </div>
</template>
<script>
export default {
  methods: {
      chooseChannel() {

      }
  }
}
</script>

<style scoped>
.iconfont {
    font-family: iconfont;
}
.wrapper {
    position: fixed;
    top: 114px;
    left: 0;
    right: 0;
    height: 54px;
    z-index: 10;
    background-color: #fafafa;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
}
.w-ipx {
    top: 154px;
}
.scroller {
    height: 54px;
    flex-direction: row;
}
.i-c {
    padding-top: 10px;
    padding-left: 45px;
    padding-right: 45px;
    padding-bottom: 6px;
    font-size: 26px;
    color: #333333;
}
.c-act {
    color: #b4282d;
}
.j-uline{
    position: absolute;
    left: 30px;
    bottom: 0;
    width: 82px;
    height: 4px;
    background-color: #b4282d;
}
.more{
    position: absolute;
    top:0;
    right:0;
    height: 52px;
    width: 100px;
    background-color: #fafafa;
    text-align: center;
    padding-top: 10px;
    opacity: 0.96;
    box-shadow:-6px -4px 4px #fafafa;
}
</style>


