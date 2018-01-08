<template>
  <div class="comment-list">
      <comment-item v-for="item in List" :comment="item" :key="item.id"></comment-item>
      <div v-if="List.length==0" class="empty-msg">当前没有评论</div>
  </div>
</template>
<script>
import CommentItem from './CommentItem.vue'
export default {
    name: 'commentList',
    props:['List'],
    components: {
        CommentItem
    }
}
</script>
<style>
.comment-list{
  background: #eee;
  color: #000;
  font-size: 15px;
  margin:10px;
  width: 300px;
  border:1px solid #eee;
  margin:10px auto;
}
</style>


