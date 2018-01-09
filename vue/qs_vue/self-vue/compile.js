// vm 表示的是 Vue的实例  也是mvvm中间的第三者 叫做 虚拟DOM
// 因为真实 DOM非常的消耗内存 而vm将 很多次的DOM修改  集中成为一次 使性能要优秀一点
function Compile(el, vm){
    this.vm = vm;
    this.el = document.querySelector(el);
    // fragment 叫做文档碎片 临时节点
    this.fragment = null;
    this.init();
}
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
            if(text.length && reg.test(text)){
                // console.log(reg.exec(text)[1]);
                this.CompileText(node, reg.exec(text)[1]);
            }
        });
    },
    CompileText (node, exp) {
        var initText = this.vm.data[exp];
        this.updateText(node, initText);
    },
    updateText (node, value) {
        console.log(node, value);
        node.textContent = typeof value === 'underfined'?'':value
    }

}