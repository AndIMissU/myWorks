# route
restful 网站向外暴露资源的 网站的本质 就是提供资源访问
url => 资源 属于一一对应关系
?queryString1=a&queryString2=b
backend 来做后端 路由规则  route
mvc 解析url 映射一个route 跟后端脚本对应的controller
/book/123456
/api
fontend 接管一切
跟服务器相关性
url => 资源缺点  http
href 就需要点击  每次点击 都需要刷新页面 用户体验不OK 在pc时代是OK的 没有任何问题 但是在移动时代 就不行了
前端url 设计规则
https://m.taobao.com/#index  #index标记首页
https://m.taobao.com/#home   #home标记home
html5 historyAPI
前端url 就像切换一张小卡片
整个页面都没有动 这就是但也应用 SPA -> SingelPageApplication

如何更新界面？ 当前端url规则启动后 交给ajax 
和vue的关系？ 我们可以在url => page => 组件
