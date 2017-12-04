
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// let circles = function(x,y){
//     // canvas.
// }

class Circle {
    // es6的构造函数
    constructor(x,y) {
        // 绘制圆 arc 圆点 半径 
        this.x = x;
        this.y = y;
        this.r = Math.random()*10;
        this._mx = Math.random();
        this._my = Math.random(); //私有属性
    }
    move(w,h) {
        this._mx = (this.x < w && this.x > 0)?this._mx:-this._mx;
        this._my = (this.y < h && this.y > 0)?this._my:-this._my;
        this.x += this._mx / 2;
        this.y += this._my / 2;
    }
    drawCircle (ctx) {
        ctx.beginPath();
        // ctx.strokeStyle="";
        ctx.arc(this.x,this.y,this.r,0,360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(2,20,200,.3)';
        ctx.fill();
    }
    //各点之间的连线
    drawLine (ctx, _circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if(d < 300) {
            ctx.beginPath();
            ctx.moveTo (this.x,this.y);
            ctx.lineTo(_circle.x,_circle.y);
            ctx.closePath();
            ctx.strokeStyle = 'rgba(2,20,200,.3)';
            //stoke
            ctx.stroke();
        }
    }
}
class CurrentCircle extends Circle {
    constructor (x,y) {
        // 传父类的方法
        super (x,y);
    }
    drawCircle (ctx) {
        ctx.beginPath();
        this.r = 4;
        ctx.arc(this.x,this.y,this.r,0,360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(2,20,200,.6)';
        ctx.fill();
    }
}
