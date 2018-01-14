<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
      <el-button type="primary">
          {{$t('login.switchLanguage')}}
      </el-button>
      <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
          <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
      </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  computed: {
      language () {
          return this.$store.getters.language;
      }
  },
  methods: {
      handleSetLanguage (lang) {
        //   切换语言 要做两件事  告诉中央值发生了改变  再是更新页面的值
          this.$i18n.locale = lang;
        //   dispatch 
          this.$store.dispatch('setLanguage', lang)
      }
  }
}
</script>
<style>

</style>


