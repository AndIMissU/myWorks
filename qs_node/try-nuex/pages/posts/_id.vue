<template>
  <div class="container">
    <h1>{{post.title}}</h1>
    <pre>{{post.body}}</pre>
    <p>
      <nuxt-link to="/posts">
        Back to the list
      </nuxt-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  // 一定要有这个数据 页面才有意义
  async asyncData({ params }) {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    return {
      post: data
    }
  }
}
</script>
<style>

</style>


