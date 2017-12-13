## 移到手机网页高度的问题
- flexible 10rem 问题  解决了所有的宽度适配  
- 然而在我们的实际开发当中 会有一个叫做单屏页面
  iphone6 的高度是 667pt(pt 是像素密度比)
  iphone6 plus 的高度  746pt
  iphone5 568pt
  安卓手机的高度是介于 iphone5s -> iphone6 plus 或者是 -> 480 宽度
  一般情况下我们不处理高度  因为会有 scroll-view overflow:hidden | scroll这些来撑高就好了
  height 哪怕是同一个设备 在微信里面 有微信的tabbar 高度 所以 做的项目如果主要是在微信朋友圈分享的话  
  或者说是微信生态的 我们应该使用微信开发者工具来进行调试
  如何解决不同手机高度？
  不是手机高度的问题  就拿单屏来说  要展示的内容不能太多 我们就可以用z-index和定位和 百分比缩放
  来解决这件事
  如果一个屏放不下 就可以用第二个屏叠在上面 解决
  微信生态 === h5生态
  基本的理念， 高度height是有可为，有可不为的 什么意思呢  
  就是太多的内容再放也放不下，但是如果安排得当 使用 z-index + 定位 在高度小的手机上使用 z-index去弥补高度不够的问题。
  所以单屏应用不能太复杂。
  那么如何等比例缩放呢？  我们可以使用 vh  rem  或者 media-query 进行自适应 

  h5 单屏应用不要急于下手， 要先构图， 在构图过程中有可能会因为设计师缺少前端知识，介入进去