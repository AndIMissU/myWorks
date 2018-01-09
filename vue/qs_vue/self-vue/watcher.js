// cb 代表着之前的 callback
function Watcher(vm, exp, cb) {
    this.cb = cb;
    this.vm = vm;
    this.exp = exp;
    this.value = this.get();
}
Watcher.prototype = {
    get () {
        Dep.target = this;
        var value = this.vm.data[this.exp];
        Dep.target = null;
        return value;
    },
    update() {
        this.run();
    },
    run() {
        // 将实例化的 callback 执行一下 使得内部的this指向vm
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if(value !== oldVal) {
            this.value = value;
            // 把Complie里面的watcher里面的回调 执行一下
            this.cb.call(this.vm,value,oldVal);
        }
    }
}