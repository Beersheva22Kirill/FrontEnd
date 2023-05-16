const x = {};
let y;
x.undefined = 10;
x[undefined] = 10;
console.log(x[y]); //разобраться с этими проблемами

// переопределили метод toString в объекте
const z = {z: "z", toString: function() {return "zu"}}; 
let q = {q: "q", toString: function() {return "qu"}};
const s = {z: 10, q: 20};

z.toString = function(){ return "zz"} //так же переобределение функции toString
s[z] = 100;
s[q] = 200;

console.log('-------------');
console.log(s[z]);

console.log('-------------');
console.log(s);

console.log('-------------');
const f = function() {};
const num = 2;
console.log(f.w);
f.w = function(a,b) {
    return a + b;
}
console.log(f.w(10,20));
console.log(num.w);

console.log('-------------');
(2).w = 10
console.log((2).w);

console.log('-------------');
const ar = [2];
ar.field = 10;
console.log(ar);
console.log(ar.field);

console.log(Array.from({length:2})) //так можно получить массив undefined
console.log(Array.from({length : 5}).map((__,index) => index + 5))

console.log('-------------');
//num == 2;
num.x = 100;
console.log(num.x);
console.log(num)

console.log('-------------');
const mm = {};
mm.x = 100;
console.log(mm.x);
console.log(mm);

console.log('-------------');
//let www; //type error т.к. у undefined нет класса обертки
//www.field1 = 200;
let str1 ="abcd"
str1[0] = "*"   //строка imutable (не изменияемая)
console.log(str1);