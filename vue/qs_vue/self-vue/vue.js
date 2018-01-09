function Vue(options) {
    this.data = options.data || {};
    this.methods = options.methods || {};
    // 编译过程
    new Compile(options.el, this);
}
Vue.prototype = {}