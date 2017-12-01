

// // 如何手动实现
// // Array.prototype.map
// // 手动实现 map数组的方法
var originArr = [1,2,3,4,5];
var originAbc = ['a','b','c'];
// // var neworiginArr = originArr.map(item => {
// //     return item*3;
// // });
// // console.log(neworiginArr);

// // 用es5 实现 
// // 闭包 高阶函数 作用域
// // step1  实现效果                      第一个版本


// // var newArr = [];                      
// // for(i in originArr){
// //     newArr.push(originArr[i]*3) ;
// // }
// // 顺序流程化具象解决问题
// // console.log(newArr);


// // step2  封装函数                        第二个版本
// // var timesArray = function(array) {    自己的版本
// //     var newarray = [];
// //     for(i in array){
// //         newarray.push(array[i]*3);
// //     }
// //     return newarray;
// // }
// // console.log(timesArray(originArr));
// // var multiplyByThree = function(arr) { 老师的版本
// //     var newArr = [];
// //     for(i in arr){
// //         newArr.push(arr[i]*3);
// //     }
// //     return newArr;
// // }
// // step3  将具象的东西拿掉                  第三个版本

// // var multiplyByNum = function(arr,n){  自己的版本
// //     var newArr = [];
// //     for(i in arr){
// //         newArr.push(arr[i]*n);
// //     }
// //     return newArr;
// // }
// // console.log(multiplyByNum(originArr,3));
//                                     //    老师的版本
// function timesThree(item){
//     return item*3;
// }
// function timesFive(item) {
//     return item*5;
// }
// function makeUppercase (item) {
//     return item.toUpperCase();
// }

// // // 高阶函数
// function map(arr, fn){
//     // 函数内部 分几个函数 每个函数只做一件事情
//     var newArr = [];
//     for(i in arr) {
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }
// console.log(map(['a','b','c'],makeUppercase));
// // Array.prototype.map = function(func){
// //     var newArr = []
// //     for(key in this){
// //         newArr.push(func(this[key]));
// //     }
// //     return newArr;
// // }
// step4 

Array.prototype.map = function(fn) {
    var newArr = [];
    console.log(this);
    for(i in this){
        newArr.push(fn(this[i], i, this));
    }
    return newArr;
}
// console.log()
var arr = originArr.map(function(item, index, originArr){
    return item *index;
});
console.log(arr);


