

class Rectangle {
 
    constructor (width,heigth){
        this.width = width;
        this.heigth = heigth;   
    }

    perimetr () {
        return 2 * (this.heigth + this.width);
    };

    square (){
        return this.width * this.heigth;  
    };
}


console.log('----------------------------------------')
const rect = new Rectangle(10,20);
console.log(rect)
console.log("rectangle (square) = " + rect.square())
console.log("rectangle (perimetr) = " + rect.perimetr()  + "\n")


class Square extends Rectangle{
 
    constructor (width){
        super(width,width)   
    }
}

const square = new Square(5);
console.log(square);
console.log("square (square) = " + square.square());
console.log("square (perimetr) = " + square.perimetr());



