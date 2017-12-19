// 题目： 写出原生js或者JQ循环下面的<li>内容
//   <ul>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//       <li></li>
//   </ul>

// 我的实现：

/*
 * JS实现
 */
var li = document.getElementsByTagName('li');
for (i in li){
    console.log(li[i].innerHTML);
}

/*
 * JQ实现
 */
var li = $("ul li");
$each(li, function(i){
    console.log(this.text());
});
