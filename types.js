console.log("Hello World!");
//
// let a = 5; //number
// a = "hello"; //string
// a = false; //boolean

// ----------преобразование типов данных-------------
let a = 5 + "5";
console.log(a, typeof a);
a = a - 5;
console.log(a, typeof a);
a = "abs";
a /= 2;
console.log(a, typeof a);
a = "123";
console.log(a-=0, typeof a);

if (a = 0) {
    console.log("a is true");
    } else{
        console.log("a is not true");
}

console.log(a,typeof a);

let a1 = 1;
let b1 = 3;
let c1 = 2;

if (a1 < b1 < c1) {
    console.log("a < b < c is true")
    console.log("next line")
}

if (2 > "abc") {
    console.log("2 > 'abc' is true")
    console.log("next line")
} else{
    console.log("2 > 'abc' is false")
}

if (2 < "abc") {
    console.log("2 < 'abc' is true")
    console.log("next line")
} else{
    console.log("2 < 'abc' is false")
}

if (2 == "abc") {
    console.log("2 == 'abc' is true")
    console.log("next line")
} else{
    console.log("2 == 'abc' is false")
}

if (2 != "abc") {
    console.log("2 != 'abc' is true")
    console.log("next line")
} else{
    console.log("false")
}

let a2 = "abc";
console.log(a2, typeof a2)
a2 = !!a2;
console.log(a2, typeof a2)

console.log(2 + 10 * true / false); // == Infinity

console.log("3" - (4 + "1")); // "+"  конкатенация "-" преобразование

let a3 = new Number(3);
console.log(a3 ,typeof a3) //тип объект
console.log(a3 = a3 + 5,typeof a3) // преобразование объекта к примитиву

let a4 = 0.3456789
console.log(a4, typeof a4);
a4 = a4.toFixed(2)
console.log(a4 + 5, typeof a4);
a =+ a;
console.log(a4 + 5, typeof a4);

a4 = !!new Number(0);
console.log(a4, typeof a4);

a4 = !!0;
console.log(a4, typeof a4);

//---------------end of block-----------------

// Math.trunc 2.2 == 2 and 2.6 == 2
// Math.floor 2.3 == 2 and 2.6 == 2
// Math.round 2.3 == 2 and 2.6 == 3
let a5 = 2.2
let b = 2.6
console.log("a = " + Math.trunc(a5), "b = " + Math.trunc(b),"trunc a == 2.2 b = 2.6");
console.log("a = " + Math.floor(a5), "b = " + Math.floor(b),"floor a == 2.2 b = 2.6");
console.log("a = " + Math.round(a5), "b = " + Math.round(b),"round a == 2.2 b = 2.6");

let c = "256 + 320";
console.log(+c);
console.log(parseInt(c), "parseInt '256 + 320'")
c = " 256.4a"
console.log(parseInt(c), "parseInt '256.4a'")
console.log(parseFloat(c), "parseFloat '256.4a'")
//parseInt парсит строку в число до первого не числового метода
//parseFloat парсит строку в число учитывая дробную часть до первого не числового метода
console.log(String.fromCharCode(97,65))

// console.log((123).toString())

