
//write myForEach to call from any array
//write myMap to call from any array

Array.prototype.myForEach = function(func){
    for (let index = 0; index < this.length; index++) {
        func(this[index])   
    }

}

Array.prototype.myMap = function(){
    let res = []
    for (let index = 0; index < this.length; index++) {
        res[index] = func(this[index])   
    }
    return res;
}

Array.prototype.myReduce = function(){

}

Array.prototype.myFilter = function(){

}

const arr = [1,2,3,4]

arr.myForEach(n => console.log(++n))