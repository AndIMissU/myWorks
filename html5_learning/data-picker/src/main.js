// jquery 是 date-picker的依赖  main.js  是我们打包的入口
import $ from 'jquery';
// 事件冒泡
// console.log('aaaa');
import Factory from './Factory';
$('body').on('click','.tqb-date-picker-input',event => {
    // console.log(event.target);
      let target = $(event.currentTarget);
      // console.log(target);
      let options = target.data();
      // console.log(options);
      // let target = $(event.currentTarget);
    //   Factory用的太大了吧？如果别的地方也要用Factory概念？ 打包时会用命名空间
      let picker = Factory.createDatePicker(target, options);
  });
