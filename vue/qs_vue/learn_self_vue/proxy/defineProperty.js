var a = {}; //被代理或者被劫持的对象
// var val = 3;
Object.defineProperty(a, "b",{
    set: function (newValue) {
        console.log(`以前的值是${this.value}`);
        this.value = newValue;
        console.log(`现在的值是${this.value}`);
    },
    get: function () {
        console.log("你在获取我的值");
        return this.value;
    }
});
// console.log(a.b);
a.b = 333;
console.log(a.b);


// Object.defineProperty(a, "c", {
//     value: 3445,
//     enumerable: true
// });
// // console.log(Object.keys(a));
// for(var item in a) {
//     // console.log(item);
// }

// Jquery 是通过Dom 设置数据 
// Vue 是通过劫持数据  接管属性的管理  进行事件的监听  订阅者模式

// Obejct方法
// defineProperty是为了精细的操作对象的属性访问
// defineProperty 有三个 参数  

// Object.defineProperty(obj, prop, descriptor)
// obj 第一个是表示目标对象  就是要劫持的对象 是否可读取  是否可设置  是否可重写 set get
// prop 第二个参数 表示需要定义的属性或方法名字 
// descriptor 第三个参数 表示目标属性所拥有的特效


// Object.defineProperty(a, "b", {

// });
// console.log(a.b);
Object.defineProperty(a, "c", {
    // enumerable: true
    value: 123,
    writable: true, // 是否可重写
    configurable: false // 是否可设置
});
a.c = 1231312312;
// console.log(a.c);


