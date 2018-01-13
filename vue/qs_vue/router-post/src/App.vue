<template>
  <div id="app">
    <el-badge class="item" :value="12" :max="9">
      <el-button nativeType="submit" size="meduim" @click="addComment">评论</el-button>
    </el-badge>
    <el-badge class="item" :value="1" :max="9">
      <el-button size="small" type="primary" :disabled="saveDisabled" @click="doSave">发布</el-button>
    </el-badge>
    <el-badge isDot class="item" :value="1" :max="9">
      <el-button size="mini" type="text">前往</el-button>
    </el-badge>
    
    
    
    <!-- <el-button size="meduim" type="primary">回复</el-button>
    <el-button size="meduim" type="primary" icon="el-icon-edit">Click Me!</el-button> -->
  </div>
</template>

<script>
import ElButton from '@/components/ElButton'
import ElBadge from '@/components/ElBadge'
export default {
  name: 'app',
  data() {
    return {
      saveDisabled: true
    }
  },
  components: {
    'el-button': ElButton,
    'el-badge': ElBadge
  },
  mounted() {
    setTimeout(()=>{
      this.saveDisabled = false;
    },5000)
  },
  methods: {
    addComment() {
      console.log('添加评论');
    },
    doSave() {
      console.log('发布');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
