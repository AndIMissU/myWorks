<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="价格" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small" @click="delSingelGood(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              <small>数量：</small>{{totalCount}} <small>金额：</small>{{totalMoney}} <small>元</small>  
            </div>
          </el-tab-pane>

          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>
        <div class="div-bth">
          <el-button type="warning">挂单</el-button>
          <el-button type="danger" @click="delAllGoods">删除</el-button>
          <el-button type="success" @click="checkout">结账</el-button>
        </div>
      </el-col>
      <el-col :span="17" class="pos-goods">
        <div class="often-goods">
          <div class="title">常用商品</div>
          <div class="often-goods-list">
            <ul>
              <li v-for="item in oftenGoods" :key="item" @click="addOrderList(item)">
                <span>{{item.goodsName}}</span>
                <span class="o-price">¥{{item.price}}元</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <ul class="cookList">
                <li v-for="good in type0Goods" :key="good" @click="addOrderList(good)">
                    <span class="foodImg"><img :src="good.goodsImg" width="100%"></span>
                    <span class="foodName">{{good.goodsName}}</span>
                    <span class="foodPrice">￥{{good.price}}元</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <ul class="cookList">
                  <li v-for="good in type1Goods" :key="good" @click="addOrderList(good)">
                      <span class="foodImg"><img :src="good.goodsImg" width="100%"></span>
                      <span class="foodName">{{good.goodsName}}</span>
                      <span class="foodPrice">￥{{good.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                  <li v-for="good in type2Goods" :key="good" @click="addOrderList(good)">
                      <span class="foodImg"><img :src="good.goodsImg" width="100%"></span>
                      <span class="foodName">{{good.goodsName}}</span>
                      <span class="foodPrice">￥{{good.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                  <li v-for="good in type3Goods" :key="good" @click="addOrderList(good)">
                      <span class="foodImg"><img :src="good.goodsImg" width="100%"></span>
                      <span class="foodName">{{good.goodsName}}</span>
                      <span class="foodPrice">￥{{good.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axi from "axios";
export default {
  name: "pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      totalMoney: 0,
      totalCount: 0
    };
  },
  created: function() {
    axi
      .get("http://jspang.com/DemoApi/oftenGoods.php")
      .then(response => {
        this.oftenGoods = response.data;
      })
      .catch(error => {
        alert("网络错误不能访问");
      });

    axi
      .get("http://jspang.com/DemoApi/typeGoods.php")
      .then(response => {
        // console.log(response);
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3];
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
  },
  mounted: function() {
    var OrderHeight = document.body.clientHeight;
    console.log(OrderHeight);
    document.getElementById("order-list").style.height = OrderHeight + "px";
  },
  methods: {
    // 增加商品
    addOrderList(goods) {
      // 清零
      this.totalMoney = 0;
      this.totalCount = 0;
      // 首先要判断商品是否存在于订单列表中
      let isHave = false;
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true;
        }
      }
      // 根据判断的值 编写业务逻辑
      if (isHave) {
        // 改变列表中商品的数量
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      } else {
        let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
      this.getAllMoney();
    },
    // 删除单个商品
    delSingelGood(goods) {
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    // 删除所有商品
    delAllGoods(goods){
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    // 汇总数量和金额
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
      if (this.tableData) {
        // 计算汇总金额和数量
        this.tableData.forEach(element => {
          this.totalCount += element.count;
          this.totalMoney += element.count * element.price;
        });
      }
    },
    // 模拟结账
    checkout(){
      if(this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: '结账成功，感谢您又为店里贡献了一份力量',
          type: 'success'
        });
      } else {
        this.$message.error('您还没有选择商品呢，老板了解你急切的心情！');
      }
    }
  }
};
</script>

<style scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.div-bth {
  margin-top: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
  cursor: pointer;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv {
  background-color: #ffffff;
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
}
</style>


