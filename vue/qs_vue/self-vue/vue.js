function Vue(options) {
    this.data = options.data || {};
    this.methods = options.methods || {};

    // Object.keys(this.data) 就是定义的两个属性名
    Object.keys(this.data).forEach(key => {
        // 数据代理
        this.proxyKeys(key);
    });
    observer(this.data);
    // created只需要实例化就行  
    // options.create.call(this);
    // 将当前对传递给 Compile 编译过程
    new Compile(options.el, this);
    // mouted发生的最佳时机  必须在组件挂载在页面上之后才可以
    // 生命周期函数， 在相应时刻发生的事件钩子
    options.mounted.call(this);
};

Vue.prototype = {
    // Object的新属性  实现 数据的绑定
    // 定义新属性  和修改属性
    // 数据代理
    proxyKeys(key) {
        var self = this;
        // console.log(key);
        // 定义属性   属性的get和set   是MVVM的本质
        // 有了数据代理，就可以不用深入对象的data中对数据进行操作，可以在对象上直接操作属性
        // defineProperty 最本质的是可以设置对象的行为（包括其属性）
        Object.defineProperty(this, key, {
            enumerable: false, // 不可遍历（不重要）
            configurable: true,  // 可以配置（不重要）
            // 介入get 方法 （重点在于数据的get 和 set）
            get: function getter () {
                // console.log(`您在获取${key}`);
                return self.data[key];
            },
            set: function setter (newVal) {
                // console.log(`您设置了${key}的值为${newVal}`);
                self.data[key] = newVal;
            }
        });
    }
};
