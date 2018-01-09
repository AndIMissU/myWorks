function Observer(data) {
    // 这个函数是为了让n个 {{title}} 能过push到一个数组里面去
    this.data = data; 
    this.walk(data);
}
Observer.prototype = {
    // walk 遍历的作用
    walk(data) {
        Object.keys(data).forEach(key => {
            // 重新激活 页面数据 data里面有多少项 就执行多少次
            this.defineReactive(data, key, data[key]);
        });
    },
    defineReactive(data, key, val) {
        var dep = new Dep();
        // 设置属性
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get: function getter () {
                // 如果Dep.target里面有值 一开始 是没有值的 
                // 在执行watcher之后 Dep.target 的值是 Watcher 里面就有值了
                if(Dep.target) {
                    // dep 的 添加子元素方法
                    dep.addSub(Dep.target);
                }
                return val;
            },
            set: function setter(newVal) {
                if(newVal === val) {
                    return;
                }
                val = newVal;
                dep.notify();
            }
        });
    }
}
// 构造发布者
function Dep () {
    // 构造函数
    this.subs = [];
}
Dep.prototype = {
    addSub (sub) {
        // 添加进去
        this.subs.push(sub);
    },
    notify () {
        this.subs.forEach( sub => {
            // 调用 watcher里面的update 进行自动更新
            sub.update();
        });
    }
};
// 初始化
Dep.target = null;

function observer (value) {
    if(!value || typeof value !== 'object') {
        return;
    }
    // 构建一个观察者对象
    return new Observer(value);
}
