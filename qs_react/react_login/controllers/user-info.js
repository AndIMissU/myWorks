const user = require('./../models/user')
module.exports = {
  async signIn(ctx) {
    const { username, password } = ctx.request.body;

    ctx.body = {
      success: true,
      message: '登入成功'
    }
  }
}