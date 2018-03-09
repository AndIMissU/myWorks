// 异步问题 是面试里面的核心问题
// async await
// es6 使用 promise 完美的解决了异步的问题
// 里面的 .then .then .catch 还是有点矫情 太冗长了
// node file mysql 里面也是需要异步转同步
// 所以 es7 提供来 async await 来解决问题 
// php java 
function getSyncTime() {
  return new Promise((resolve, reject) => {
    try {
      let startTime = new Date().getTime();
      setTimeout(()=> {
        let endTime = new Date().getTime();
        let data = endTime-startTime;
        resolve(data);
      }, 500);
    } catch(e) {

    }
  });
}

async function getSyncData() {
  let time = await getSyncTime();
  let data = `endTime-startTime=${time}`;
  return data;
  console.log(data);
}
async function getData() {
  let data = await getSyncData();
  console.log(data);
}

getData();
