
// js从诞生的那一刻开始 js就是异步的 回调
// readfile 就是一个异步的api  执行顺序就是不按顺序的
// node是一个异步无阻设备 node是js的后端实现 将js丛后端带到前端
// node 异步无阻塞 提高性能 服务器请求
// 异步 和 同步放在一起 异步提高性能但是不好控制 就是没有顺序 

const rf = require("fs"); 

/*
 * 异步读取
 */
rf.readFile("./file/input.txt",(err,data)=>{  
    if(err){  
        return console.error(err); 
    }else{  
        console.log(data.toString());  
    }  
}); 

rf.readFile("./file/input2.txt",(err,data)=>{  
    if(err){  
        return console.error(err); 
    }else{  
        console.log(data.toString());  
    } 
}); 

rf.readFile("./file/input3.txt",(err,data)=>{  
    if(err){  
        return console.error(err);  
    }else{  
        console.log(data.toString());  
    }  
});  
 

/*
 * 同步读取
 */
var input = rf.readFileSync("./file/input.txt"); 
console.log(input.toString());

var input2 = rf.readFileSync("./file/input2.txt"); 
console.log(input2.toString()); 

var input3 = rf.readFileSync("./file/input3.txt");  
console.log(input3.toString());
 

/*
 * 回调地狱
 * 一层一层向下读取和回调
 */
 
rf.readFile('./file/input.txt',(err, data)=> {
    console.log(data.toString());
    rf.readFile('./file/input2.txt',(err,data)=> {
        console.log(data.toString());
        rf.readFile('./file/input3.txt',(err,data) => {
            console.log(data.toString());
        });
    });
});



/*
 * Promise 实现异步和控制顺序执行
 */
// 将异步的代码封装在 Promise里面
function readFile1() {
    return new Promise((resolve,reject) => {
        rf.readFile('./file/input.txt',(err,data) => {
            if(err) {
                reject(err);  //和return console.error(err); 类似
            } else {
                resolve(data); // 将数据交出去
            }
        });
    });
}
function readFile2() {
    return new Promise((resolve,reject) => {
        rf.readFile('./file/input2.txt',(err,data) => {
            if(err) {
                reject(err);  //和return console.error(err); 类似
            } else {
                resolve(data); // 将数据交出去
            }
        });
    });
}
function readFile3() {
    return new Promise((resolve,reject) => {
        rf.readFile('./file/input3.txt',(err,data) => {
            if(err) {
                reject(err);  //和return console.error(err); 类似
            } else {
                resolve(data); // 将数据交出去
            }
        });
    });
}
readFile1()
  .then((data)=> {
    console.log(data.toString());
    return readFile2();
  })
  .then((data) => {
      console.log(data.toString());
      return readFile3();
  })
  .then((data) => {
      console.log(data.toString());
  });
