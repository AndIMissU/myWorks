// 路由中间件函数
import mongoose from 'mongoose';
const Article = mongoose.model('Article');
// next 交给下一个 中间件 交出对用户访问的控制权 下一个中间件接住并继续下去
export const getArticles = async(ctx, next) => {
  // 返回 articles await article find ()是一种游标 默认获取得到 mongodb的20条数据
  // 这个时候就需要 分页 page 每页条li mi
  // for(let i=0;i<2000;i=i+5){
  //   let page = db.articles.find({num:{"$gt":i,"$lt":i+5}})
  // }
  let { page = 1 , limit = 15 } = ctx.params;
  // 多少条开始查
  page = Number((page - 1)*limit) || 0;
  limit = Number(limit) || 15;

  // 数据库查询
  try{
    // exec 异步执行  await 同步执行 
    let total = await Article.find({
      publish: true
    }).exec();
    total = total.length;
    // skip忽略前面的数据
    const data = await Article.find({
      publish: true
    }).skip(page).limit(limit).sort({'createdAt': -1}).exec()
    ctx.body = {
      success: true,
      data: data,
      total: total
    }
  } catch(e) {
    ctx.body = {
      success: false,
      err: e,
      total: 0
    }
  }
}