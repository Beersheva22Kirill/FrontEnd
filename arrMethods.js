
//write myForEach to call from any array
//write myMap to call from any array

Array.prototype.myForEach = function(func, i = 0){
    for (let index = i; index < this.length; index++) {
        func(this[index], index, this)   
    }
}

Array.prototype.myMap = function(func, i = 0){
    let res = [];
    for (let index = i; index < this.length; index++) {
        res[index] = func(this[index], index, this)
    }
    return res;
}

Array.prototype.myReduce = function(func, accumStart){
    let res = accumStart == undefined ? this[0] : accumStart;
    let i = accumStart == undefined ? 1 : 0;
    for (let index = i; index < this.length; index++) {
        res = func(res,this[index], index, this)
    }
    return res;
}

Array.prototype.myFilter = function(func){
    let res = [];

    for (let index = 0; index < this.length; index++) {
        if (func(this[index], index, this)) {
            res.push(this[index]); 
        
        }  
    }
    return res;
}

let arr = [1,2,3,4]

arr.myForEach(n => console.log(++n))

arr = arr.myMap(n => n = ++n)
console.log(arr)

arr = arr.myFilter(n => n%2 == 0)
console.log(arr)

arr = arr.myReduce((a,b) => a + b)
console.log(arr)
