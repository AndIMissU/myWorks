// function hahaha(name, haircut) {
//     this.name = name;
//     this.haircut = haircut;
// }

// hahaha.prototype.hobbies = function () {
//     console.log('不管怎样，开心就好');
// }
// var haha = new hahaha('dog', ' 平刘海');
// var ha = new hahaha('dog', '爆炸头');
// haha.hobbies();
// ha.hobbies();


// // 要找什么的dog  dog 都是那个dog  如何在多次new时 只得到一个dog
// // 这就是单例

var Singleton = function(name) {
    this.name = name;
    // instanceof 实例 
    this.instance = null;
}
Singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
        // 这里的实例化只是一次
    }

    return this.instance;
    // 如果this.instance不是空的 就是已经实例化过了  直接返回this.instance
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
// console.log(a.name === b.name);
// console.log(b.name);

// a === b 引用式赋值

class mySingleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        if(!mySingleton.instance) {
            mySingleton.instance = new mySingleton(name);
        }
        return mySingleton.instance;
    }
}

var c = mySingleton.getInstance('sven1');
var d = mySingleton.getInstance('sven2');
console.log( c=== d);
console.log(c.name);
console.log(d.name);
