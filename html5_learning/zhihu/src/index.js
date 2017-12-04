
let  canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// console.log(offsetWidth);
console.log(document.body.clientWidth);

// canvas 绘图
// es6 
let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;

let circles = [];     //定义一个空的数组

let current_circle = new CurrentCircle(0,0);


let init = function (num) {
    for (var i = 0; i < num; i++){
        // 画圆  一个个独立的节点

        circles.push(new Circle(Math.random()*w,Math.random()*h));
    }
    draw();
}
function draw(){

    ctx.clearRect(0,0,w,h);
    for (let i = 0 ; i < circles.length ; i++) {
        circles[i].move(w,h);
        circles[i].drawCircle(ctx);
        for(let j = i+1 ; j < circles.length ; j++){
             circles[i].drawLine(ctx, circles[j]);
        }
        
    }
    if(current_circle.x) {
        current_circle.drawCircle(ctx);
        for(var k = 1; k<circles.length ;k++){
            current_circle.drawLine(ctx,circles[k]);
        }
    }
    //每60帧进行重绘图
    requestAnimationFrame(draw);
}
window.addEventListener('load',function(){
    // 看红宝书
    init(20);
});
window.onmousemove = function(e) {
    current_circle.x = e.clientX;
    current_circle.y = e.clientY;
}

// window.onload = function() {

// }












