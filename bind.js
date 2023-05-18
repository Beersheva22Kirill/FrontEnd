//Function.prototype.bind

 Function.prototype.myBind = function(object,...params) {
    let newThis = {...object}
    newThis['nameFunc'] = this;
        return function(){
            newThis['nameFunc'](...params);
        };
 }


const point = {x: 3, y: 4};

function displayPoint(z, t) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t = ${t}`)
}
displayPoint(100, 200);
displayPoint = displayPoint.myBind(point, 100, 200); 
displayPoint();