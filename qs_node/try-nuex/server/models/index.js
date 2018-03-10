// mongoose 驱动  为了连接 mongodb数据库 这个就是相当于一个抽象的数据库
import mongoose from 'mongoose';
import config from '../config';
require('./user');
const User = mongoose.model('User');
// mongodb 也有http协议
const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;
mongoose.Promise = global.Promise;
mongoose.connection.openUri(mongoUrl).once('open', async() => {
  console.log('database connect successed');
  let userInfo = config.user;
  let user = await User.findOne({ 
    role: 'superAdmin'}).exec();
    if(!user) {
      user = new User(userInfo);
      await user.save();
      console.log('管理员已生成');
    }
}).on('error', (error) => {
  console.log('database conect failed', error);
});