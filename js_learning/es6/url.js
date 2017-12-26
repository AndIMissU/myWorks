const url = 'http://localhost:3000/ecdo.html?a=1&b=3';
// 查询参数部分
let query_string = url.substring(
    // start_index 
    url.indexOf('?')+1
);
console.log(query_string);
let qsArr = query_string.split('&');
console.log(qsArr);
const qsObj = {};
for (let qs_item of qsArr) {
    let pos = qs_item.indexOf('=');
    let key = qs_item.substring(0, pos);
    let value = qs_item.substring(pos+1);
    qsObj[key] = value;
}
console.log(qsObj);