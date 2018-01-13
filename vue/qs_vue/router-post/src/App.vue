<template>
  <div id="app">
      <el-rate v-model="rate1"></el-rate>
  </div>
</template>
<script>
// 1 click 确定当前多少分
// 2 mousemove 和 mouseleave的时候 
// 3 change
import ElRate from '@/components/ElRate'

export default {
    data() {
        return {
            rate1: null
        }
    },
    components: {
        ElRate
    }
  
}
</script>
<style>

</style>


