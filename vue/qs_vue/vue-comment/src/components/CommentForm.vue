<template>
  <form class="input-area">
    <label>用户名：</label>
    <input type="text" class="user" placeholder="请输入用户名" ref="input" />
    <label>评论：</label>
    <textarea ref="content" placeholder="请输入评论内容" class="textarea"></textarea>
    <button type="button" @click="Submit">提交</button>
  </form>
</template>
<script>
export default {
  methods: {
    Submit() {
      let bit = 6;
      let account = Math.random().toFixed(bit)*Math.pow(10, bit);
      let time = new Date().toLocaleString();
      let user = this.$refs.input.value;
      let content = this.$refs.content.value;
      // 子组件向父组件提交事件
      this.$emit('addComment', account+ ' ' + time + ' ' + user + ':' + content);
      this.$refs.content.value = '';  // 手动清空评论框数据
    }
  }
}
</script>
<style>
.input-area {
  color: #000;
  font-size: 15px;
  margin: 10px auto;
  width: 300px;
}
.input-area .user {
  border: 1px solid blue;
  width: 100px;
  display: block;
  margin-bottom: 10px;
}
.input-area .textarea {
  border: 1px solid blue;
  width: 100px;
  height: 100px;
  display: block;
  margin-bottom: 10px;
}
</style>


