<template>
  <div class="el-badge">
      <slot></slot>
      <transition name="el-zoom-in-center">
          <sup v-text="content" class="el-badge__content" v-show="!hidden&& (content||isDot)"
            :class="{'is-fixed': true, 'is-dot': isDot}"
          ></sup>
      </transition>
  </div>
</template>
<script>
export default {
  name: 'ElBadge',
  props: {
      value: {},
      max: Number,
      isDot: Boolean,
      hidden: Boolean
  },
  computed: {
      content() {
          if (this.isDot) return;
          const value = this.value;
          const max = this.max;
          
          if(typeof value === 'number' && typeof max === 'number') {
              return max < value? `${max}+` : value;
          } 
      }
  }
}
</script>
<style>

</style>


