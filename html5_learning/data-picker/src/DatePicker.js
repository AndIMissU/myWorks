import $ from "jquery";
// webpack 不会重复打包 jquery如果被n个文件引用了 
// 最后还是会打包一个进去 当一个文件打包了的时候会做标记 后面就不会再打包了
import template from "../template/picker.hbs"

export default class DatePicker{
    constructor(el, options) {
        console.log('DatePicker');
        this.createElement(options);
        this.delegateEvent(options);
    }
    createElement(options) {
        let o = {
            static: true,
            scattered: true,
            confirm: true
        }
        let item = $(template(o));
        item.appendTo(document.body);
        setTimeout( ()=> {
            item.removeClass('out');
        }, 10);
    }
    delegateEvent(options) {

    }
}