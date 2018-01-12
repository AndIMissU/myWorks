<template>
  <div class="step1">
    <el-form :model="ruleForm" class="demo-ruleForm" ref="ruleForm" label-position="top">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" size="large"></el-input>
      </el-form-item>
      <el-form-item label="" prop="fenLei">
        <el-row style="height:35px;" type="flex" align="middle">
          <el-col :span="3" style="width:90px">
            <div class="el-col-item__label" style="padding-bottom:0">活动分类</div>
          </el-col>
          <el-col class="" :span="2">
            <el-button type="text" @click.native="dialogFormFenLeiVisible = true" 
            style="margin:0;padding:0;">设置</el-button>
          </el-col>
        </el-row>
        <el-radio-group v-model="ruleForm.fenLei">
          <el-radio v-for="item of ruleForm.fenleis" :label="item.name" :key="item.name"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-dialog title="设置活动分类" :visible.sync="dialogFormFenLeiVisible">
        <el-form>
          <el-form-item>
            <el-tag v-for="fenlei of ruleForm.fenleis" type="primary" :key="fenlei.name" :closable="true">{{fenlei.name}}</el-tag>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormFenLeiVisible: false,
      ruleForm: {
        name: '',
        fenleis: [
          { name: '未发布' },
          { name: '测试活动' },
          { name: '精彩活动' }
        ],
        fenlei: '测试活动',
        tags: []
      }
    }
  }
}
</script>

<style>

</style>
