<template>
  <div class="todo-content-title">
      <h2>Your tasks</h2>
      <p class="task-report"><span class="task-remain">{{ taskDone }} done</span> / {{ taskTotal }} task(s)</p>
  </div>
</template>
<script>
    import ListStore from '../../data/store.js'
    export default {
        data() {
            return {
                listSate: ListStore.state.items
            }
        },
        computed: {
            taskTotal() {
                return this.listSate.length
            },
            taskDone() {
                let total = 0;
                if(this.listSate.length > 0) {
                    for(let i of this.listSate) {
                    if(i.status == 'done') total++;
                    }
                }
                return total;
            }
        },
    }
</script>
<style lang="stylus">
base_dark = #4C4646
  .todo-content
    .todo-content-title
      padding 20px
      
      h2
        font-size 1.5em
        font-weight normal
        color base_dark
    
    .task-report
      font-size 0.9em
      color #afafaf
      margin-top 5px
</style>

