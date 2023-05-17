
const rectangle = new Rectangle(10,20);

function Rectangle (width, heigth){
    this.width = width;
    this.heigth = heigth;
    // this.perimetr = function(){
    //     return 2 * (this.heigth + this.width);
    // };
    // this.square = function(width,){
    //     return this.width * this.heigth;  
    // };
}

Rectangle.prototype.square = function(width,){ //типо наследование добавит методы в конструктор (прототип) Rectangle 
    return this.width * this.heigth;  
};

Rectangle.prototype.perimetr = function(){
    return 2 * (this.heigth + this.width);
};

console.log(rectangle)
console.log("square: " + rectangle.square())
console.log("perimetr: " + rectangle.perimetr())

const arr = [1,2,3];
// arr.map((n) => console.log(n))
Array.prototype.map = function(){ //переопределение метода
    for (let index = 0; index < this.length; index++) {
        console.log(this[index])
    }
}
arr.map(() => console.log(1))

