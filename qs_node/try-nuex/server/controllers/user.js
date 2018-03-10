// 这个函数去数据库获取数据
export const getUserInfo = async(ctx) => {
  ctx.body = {
    success: true,
    data: {}
  }
}