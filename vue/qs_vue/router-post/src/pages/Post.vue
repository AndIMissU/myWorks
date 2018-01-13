<template>
  <div class="post">
      <div v-if="loading" class="loading"> Loading </div>
      <div class="error" v-if="error"> {{error}} </div>
      <!-- 添加动画最好的组件 -->
      <transition name="slide">
          <div v-if="post" class="content">
              <h2>{{post.title}}</h2>
              <p>{{post.body}}</p>
          </div>
      </transition>
  </div>
  
</template>
<script>
import { getPost } from '@/api'
// api文件接管 
export default {
  data() {
      return {
          loading: false,
          error: null,
          post: null
      }
  },
  created() {
      this.fetchData();
  },
  watch: {
      '$route': 'fetchData'
  },
  methods: {
      fetchData() {
          this.error = this.post = null;
          this.loading = true;
        //   表示params 的是 ：
          getPost(this.$route.params.id, (err, post) => {
              this.loading = false;
              if (err) {
                  this.error = err.toString();
              } else {
                  this.post = post;
              }
          });
      }
  }
  
}
</script>
<style>
.loading {
    position: absolute;
    top: 10px;
    right: 10px;
}
.content{
    transition: all .35s ease;
    position: absolute;
}
.error{
    color: red;
}
.slide-enter {
    opacity: 0;
    transform: translate(30px, 0);
}
.slide-leave-active {
    opacity: 0;
    transform: translate(-30px, 0);
}
</style>


