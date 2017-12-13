// 给框架取名 js的全局变量是js的bad parts，目的是减少空间污染
// 对象字面量
const Amy = {
    // 去除空格
    // es5的书写方式
    // trin: function() {}
    // es6 trim有兼容性
    trim (str,type) {
        // return str.trim();
        // replace 第一个参数是找到替换对象，第二个是替换的值
        // /regExp对象/ + 出现一次或多次 贪婪匹配  * 是0次
        // return str.replace(/\s+/, "");
       
        // 1.去除首尾的空格
        // 2.去除开头的空格
        // 3.去除右边的空格
        // 4.去除所有的空格
        switch(type) {
            case 1:  
                return str.replace(/(^\s+)|(\s+$)/g, ""); 
                break;
            case 2:  
                return str.replace(/(^\s+)/, ""); 
                //return str.replace(/^\s+/, ""); 
                break;
            case 3:  
                return str.replace(/(\s+$)/, ""); 
                // return str.replace(/\s+$/, ""); 
                break;
            case 4:  
                return str.replace(/\s+/g, ""); 
                break;
        }
        // 如果有空格 则替换为null
        // 正则表达式中 \s 表示空格

    }
};
const strHello = 'Hello Baidu!';
console.log(strHello.replace('Baidu', 'Google'));
// console.log(Amy.trim(" mel ody "));

// 立即执行函数的妙用，可以背诵，用于对象的封装
// 好处：方便地提供私有的属性和方法
const user = (function() {
    // 立即执行函数没有返回值则默认为return undefined
    // 当一个变量用下划线开始则为私有变量
    let _name = 'seven';
        _age = 19;

    // 闭包的魔法由return 构造
    // 当return 是一个函数时则为面向对象的编程
    return {
        // 形成闭包 closure 函数运行时的上下文环境
        // 函数内部又有一个函数即构成闭包

        getUserInfo: function() {
            return  _name + ',年方' + _age;
        }
    }
})();
// 立即执行函数已经运行，但是它的内部有返回，可以在任何时刻被执行
// 上下文环境 context 立即执行函数立即执行的  闭包函数（白雪公主）被定义（毒死），
// 引用的变量和函数，都可以被调用，
// 在闭包的夹层里的变量得永生 即_age和_name夹层里的变量在立即执行函数结束后在内存中不会消失

console.log(user.getUserInfo());


// 函数里面都是局部变量
// 立即执行函数 也可以传参
// 封装一个框架，立即执行函数前面都要加一个!与前面的函数隔开

// !(function(global) {
//     global.Teel = {
//         sayHello: function() {
//             console.log("hello  world!");
//         }
//     }
// })(window);


// const Teel = (function() {
//     return {
//         sayHello: function() {
//             console.log("hello  world!");
//         }
//     }
// })()
