# 日历控件
  mocha 测试框架
  should 断言库  assertion
  安装在 devDependencies 下
  测试驱动开发 TDD 
  git branch 
  git checkout
  master dev test 标准的分支  还有我们个人开发分支
  test 将进入我们的业务开发流程

  js babel 编译
  css stylus|sass|less 预编译器 帮我们做体力活
  .styl => .css

  stylus -w （监听）-m styl/ -o css/ 这样会生成css map文件  有了它 就便于调试
  每次都要写 body margin 0 padding 0
  这个是 css的 reset
  yarn add normalize.css colors.css@2.3.0
  这个就是 normalize.css 这是一个npm包  安装一下就可以了
  colors.css 这个npm包也是安装一下就可以了
  最近提倡的前后端无界限 

  stylus 模块化方式  @import将任务模块化划分 以_.styl 将会编译到原文件 不会生成新文件
  stylus 为了方便省写选择器 提供了结构嵌套
  以tab 作为缩进 不结束缩进 里面所有的代码单元都可以引用到父类选择器
  父子
    .parent
      .child
        .sun
    .parent .child .sun（与上面意义相同）
    css的每一个作用域
    .parent
      &.parent_other_class
        ...

        换行来写其他属性