mongoDB 是一种NOSQL的数据库  是一种文档数据库 区别于关系型数据库 也就是说数据库里面存的是一个个的文件 就是doc的bjson文件 相对于 json来说做了优化
它还支持全面的JavaScript 解析  可以通过shell 对数据库进行增删改查 

MongoDB基本操作：
显示所有数据库： show dbs
显示所有数据表： show collections
选用一个数据库 ： use + 数据库名
插入users里面的一条数据 ：db>+数据库名+.insert({数据}); 比如：  db.users.insert({username:'smith'});
查找某个数据库的 数据 ： db.+数据库名+.find({条件});  比如： db.users.find({});
多行查询 ：
      > db.users.find({
      ... $and:[
      ... {_id:ObjectId("5aa34e26b74577826bcdd650")},
      ... {username: 'Ashley'}
      ... ]});
更新某个数据表（新增数据）：
      > db.users.update({username:"F"}
      ... ,{$set:
      ... {country: "Canada"}
      ... })
更改某个数据表的一行数据：
      > db.users.update({username:"F"} 
      ... ,{$set: 
      ... {username: "Fan"} 
      ... });
删除某个数据里面的一行数据：
      > db.users.update(
      ... {username:'Fan'},
      ... {$unset:{country:1}}
      ... );

mongodb使用 命名空间的方式   并且不用建表 直接保存就可以
而我们的 数据表 是以 collection 集合显示的  里面的column 可以冗余