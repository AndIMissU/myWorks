<template>
  <div class="wrapper">
    <text class="button" @click="showToast">Toast</text>
    <text class="button" @click="showAlert">Alert</text>
    <text class="button" @click="showConfirm">Confirm</text>
    <text class="button" @click="showPrompt">Prompt</text>
  </div>
</template>
<style>
  .wrapper {
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .button {
    font-size:60px;
    width:450px;
    text-align:center;
    margin-top:30px;
    margin-left:150px;
    padding-top:20px;
    padding-bottom:20px;
    border-width:2px;
    border-style:solid;
    border-color:#DDD;
    color:#666;
    background-color:#F5F5F5;
  }
</style>
<script>
  const modal = weex.requireModule('modal');
  export default {
    // vue 和小程序的核心都是MVVM
    // api not same
    methods: {
      showToast (event) {
        // console.log('toast');
        modal.toast({
          message:'This is a toast',
          duration: 1.5
        });
      },
      showAlert (event) {
        modal.alert({
          message: 'This is alert',
          duration: 1.5
        },function(value){
          console.log('alert callback',value);
        });
      },
      showConfirm (event) {
        modal.confirm({
          message:'Are you sure to Confirm?'
        },function(value){
          console.log(value);
        });
      },
      showPrompt (event) {
        
      }
    }
  }
</script>