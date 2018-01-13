<template>
  <button class="el-button"
   @click="handleClick" :type="nativeType" :disabled="disabled"
   :class="[ 
        type? 'el-button--' + type : '', 
        buttonSize? 'el-button--'+ buttonSize : '' ,
        { 'is-disabled': disabled }
        ]">
      <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
    // props 外部传入的参数
  props: {
      disabled: {
          type:Boolean
      },
       
      nativeType: {
          type: String,
          default: 'button',

      },
      size: {
          type:String
      },
      type: {
          type: String,
          default: 'default'
      },
    },
    computed: {
        // 简单的计算属性
        buttonSize() {
            return this.size;
        }
    },
    methods: {
        handleClick(evt) {
            // 子组件向外报告 传递事件
            this.$emit('click', evt);
        }
    }
}
</script>
<style>

</style>


