// vm 表示的是 Vue的实例  也是mvvm中间的第三者 叫做 虚拟DOM
// 因为真实 DOM非常的消耗内存 而vm将 很多次的DOM修改  集中成为一次 使性能要优秀一点
function Compile(el, vm){
    this.vm = vm;
    this.el = document.querySelector(el);
    // fragment 叫做文档碎片 临时节点
    this.fragment = null;
    this.init();
};
Compile.prototype = {
    init() {
        // 接管模块去编译  目前页面显示的不是html而是模版 所以需要从头开始处理模版
        this.fragment = this.nodeToFragment(this.el);
        this.CompileElement(this.fragment);
        this.el.appendChild(this.fragment);
    },
    nodeToFragment: function(el) {
        var fragment = document.createDocumentFragment();
        // 新拷贝一份  模版进行html的编译 把模版里面的值进行1替换  最后替换el.innerHTML 就达到了单项数据绑定
        // 首先生产一个document.fragment 这个东西本身是没有标签的  不会留下任何痕迹 
        var child = el.firstChild;
        // console.log(child);
        while(child) {
            // console.log((child));
            fragment.appendChild(child);
            // 得到所有节点
            child = el.firstChild;
        }
        return fragment;
    },
    CompileElement(el) {
        var childNodes = el.childNodes;
        // 得到每一个节点  从一个伪数组变为真的数组
        [].slice.call(childNodes).forEach(node => {
            // console.log(node);
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent;
            if(this.isElementNode(node)) {
                // 如果这个是一个节点  就去分析节点
                this.compile(node);
            } else if (this.isTextNode(node) && reg.test(text)) {
                this.CompileText(node, reg.exec(text)[1]);
            }
            // 递归 
            if(node.childNodes && node.childNodes.length) {
                this.CompileElement(node);
            }
        });
    },
    compile(node) {
        // 伪数组 nodeAttrs
        var nodeAttrs = node.attributes;
        Array.prototype.forEach.call(nodeAttrs, (attr)=> {
            var attrName = attr.name;
            if(this.isDirective(attrName)) {
                var exp = attr.value;
                var dir = attrName.substring(2);
                if (this.isEventDirective(dir)) {
                    this.compileEvent(node, this.vm, exp, dir);
                } else {
                    this.compileModel(node, this.vm, exp, dir);
                }
            }
        });
    },
    isEventDirective (dir) {
        // 判断是否有事件
        return dir.indexOf('on:') === 0;
    },
    isDirective (attr) {
        return attr.indexOf('v-') === 0;
    },
    isTextNode(node) {
        return node.nodeType == 3;
    },
    isElementNode(node) {
        return node.nodeType == 1;
    },
    CompileText (node, exp) {
        var initText = this.vm[exp];
        this.updateText(node, initText);
        new Watcher(this.vm, exp, value => {
            this.updateText(node, value);
        });
    },
    updateText (node, value) {
        node.textContent = typeof value === 'underfined'?'':value
    },
    compileEvent (node, vm, exp, dir) {
        var eventType = dir.split(':')[1];
        var cb = vm.methods && vm.methods[exp];
        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm),false);
        }
    },
    compileModel (node, vm, exp, dir) {
        var val = this.vm[exp];
        this.modelUpdater(node, val);
        new Watcher(this.vm, exp, value => {
            this.modelUpdater(node, value);
        });
        node.addEventListener('input', e => {
            var newValue = e.target.value;
            if(val == newValue) {
                return;
            }
            this.vm[exp] = newValue;
            val = newValue;
        }) 
    },
    modelUpdater (node, value) {
        node.value = typeof value == 'undefinde'?'': value;
    }
}