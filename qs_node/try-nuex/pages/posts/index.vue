<template>
  <div class="container">
    <h1>Blog</h1>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="{name:'posts-id', params: {id: post.id}}">{{post.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  asyncData({req,params}) {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return {
          posts: res.data.splice(0, 5)
        }
      })
  }
}
</script>
<style>

</style>


