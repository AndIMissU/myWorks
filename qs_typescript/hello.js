// 1. 用类型来约束代码 
// typescript 带来了哪些类型呢
// boolean 类型
// let isDone: boolean = false;
// isDone = true;
// Number类型
// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let notNumber: number = NaN;
// let infinityNumber:number = Infinity;
// // string类型
// let myName: String = 'Tom';
// let myAge: number = 25;
// let sentence: string = `hello,my name is ${myName}. I will be ${myAge+1} years old next month`;
// // typescript 认为 undefinded 是其他类型的子类型
// // undefined 类型
// let u: undefined = undefined;
// // null 类型
// let num: null = null;
// let num2: number = undefined;
// // 类型多选
// let myFavoriteNumber: string | number = 'seven';
// myFavoriteNumber = 2;
// // 因为number中没有 .length 方法  所以得返回string  就是返回两种都有的类型
// function getLength(something: string | number ):string {
//   return something.toString();
// }
// console.log(getLength('123'));
// // 接口
// interface Person {
//   name: string,
//   age: number
// }
// let tom: Person = {
//   name: 'Tom',
//   age: 25
// }
// interface Alarm {
//   alert();
// }
// interface Light {
//   LightOn();
//   LightOff();
// }
// class Door {
// }
// // SecurityDoor 继承 Door 并有一个接口
// class SecurityDoor extends Door implements Alarm {
//   alert() {
//   }
// }
// class Car implements Alarm, Light {
//   alert() {
//     console.log('Car Alert');
//   }
//   LightOn() {
//     console.log('Car Light On');
//   }
//   LightOff() {
//     console.log('Car Light Off');
//   }
// }
// // 泛型 是指在定义函数，接口或者类的时候 不预先指定具体的类型，在使用时再指定类型的一种特性
// // 下面的是 泛型  就是 <T> 因为创建数组  有可能数值数组  可能是字符串数组
// // T 指的是泛型  根据用的时候是什么类型 最后返回的就是什么累心
// function createArray<T>(length: number, value: T):Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// }
// // 数字数组
// let fibonacci: number[] = [1,1,3,5];
// let list:any[] = ['Xcat Liu', 25,{ website: 'http:www.baidu.com'}];
// // 不能将类型“IArguments”分配给类型“any[]”。类型“IArguments”中缺少属性“includes”。
// function sum() {
//   let args:IArguments = arguments;
// }
// function add(a:number, b:number):number {
//   return a + b;
// }
// // 当一个参数不一定是必填的 可以用 ?: 声明
// function buildName(fisrtName: string, lastName?:string):string {
//   if(lastName) {
//     return fisrtName + '·' + lastName;
//   } else {
//     return fisrtName;
//   }
// }
// let Xcatliu:[string, number] = ['Xcat Liu', 25];
// let myFavoriteNumber2:string = 'seven';
// // 类型推断
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Sat"] = 5] = "Sat";
})(Days || (Days = {}));
// 声明为枚举类型  r如果可以声明为枚举类型就不要声明为数组类型
console.log(Days['Sun'] === 0);
