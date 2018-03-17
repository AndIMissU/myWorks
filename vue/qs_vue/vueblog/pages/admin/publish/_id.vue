<template>
  <div class="admin-publish container">
    <div class="publish-title">
      <input type="text" 
      placeholder="文章标题" v-model="article.title">
    </div>
    <div class="publish-content">
       <top-editor
        v-model="article.content"
        :upload="upload"
        :options="options"
        @save="save">
      </top-editor> 
    </div>
    <div class="publish-handle">
      <input type="text"
       placeholder="回车可创建新标签"
       v-model="tag">
       <div class="handle-button">
         <button @click="publish(false)">存草稿箱</button>
         <button @click="publish(true)">发布</button>
       </div>
    </div>
    <Tip ref="tip"></Tip>
  </div>
</template>
<script>
import TopEditor from
 'top-editor/src/lib/TopEditor.vue'
export default {
  data () {
    return {
      upload: {},
      options: {},
      article: {
        title: '',
        content: '',
        tags: []
      },
      tag: '',
      tags: []
    }
  },
  methods: {
    save() {},
    publish(isPublish) {
      if (!this.article.title || 
      !this.article.content) {
      this.$refs.tip.openTip('标题和内容不能为空!')
      // console.log('填写不完整')
      // return
    } else {
      let article = {
        title: this.article.title,
        content: this.article.content
      }
      // console.log('fdfdf')
      this.$store.dispatch(
        'CREATE_ARTICLE', article)
      .then((data) => {
        if(data.success) {
          this.$refs.tip.openTip('文章创建成功')
          this.article.title = ''
          this.article.content = ''
        }
      })
    }

      // 存到mongodb 草稿？ publish 
    }
  },
  components: {
    TopEditor
  }
}  
</script>
<style>

</style>