let a;

console.log(a + 10, typeof a);
console.log(function (){ return function(){return 10}}()()); //return undefinded

//console.log(function (){}()()); //return Exception TypeError
console.log(function (){}()); //return undefinded

//let 2; //return SintaxError
console.log(eval("a * 2"));

//console.log(eval("Math.sqrt(4) * (100 - d())"));// return ReferenceError
console.log(eval("let d = function(){return function(){return 10}}; Math.sqrt(4) * (100 - d()())"));

console.log(`3 == '3' is ${3 == '3'}`); //'==' checks value and does not check type
console.log(`3 === '3' is ${3 === '3'}`); //'===' checks value and type


let n = NaN;
let m = null;
let s;
console.log(`\nn (NaN) type ${typeof n}\n`);
console.log(`m (null) type ${typeof m}\n`);
console.log(`m - 2 = ${m - 2} (m == null) type ${typeof (m + 2)}\n`);
console.log(`s (undefined) type ${typeof s}\n`);
console.log(`s + 2 = ${s + 2} (s == undefined) type ${typeof (s + 2)}\n`);
console.log(`s + '2' = ${s + '2'} (s == undefined) type ${typeof (s + '2')}\n`);
console.log(`s - '2' = ${s - '2'} (s == undefined) type ${typeof (s - '2')}\n`);

//---------default parametr definition------------- 
function sum (op1 = 10, op2 = 20) {
    return op1 + op2;
}

let x = 5;
let y = 10;
console.log('\ndefault parametr definition\n')
console.log(`x == ${x} and y == ${y} function sum(x,y) ${sum(x,y)}\n`); //with parametrs
console.log(`x == ${x} and y == ${y} function sum(x,y) ${sum(x)}\n`); //with one parametrs
console.log(`x == ${x} and y == ${y} function sum(x,y) ${sum()}\n`); //without parametrs
console.log('end default parametr definition\n')

// -------end default parametr definition----------- 