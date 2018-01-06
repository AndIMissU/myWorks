<template>
  <ul class="todo-list">
      <todo-item v-for="(item, key) in collection" v-bind:key="key" :model="item"></todo-item>
  </ul>
</template>
<script>
    import TodoItem from './TodoItem.vue'
    export default {
        props: ['collection'],
        components: {
            'todo-item': TodoItem
        }
    }
</script>
<style lang="stylus">
.todo-list
    list-style none 

</style>

