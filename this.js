this.x = 100;
//console.log(this);

function f1(){
    return this; // содержит ссылку на внешний объект (в данном случае на глобальный объект)
}

const f2 = () => {
     return this;
}

console.log(`f1 call result`, f1());
console.log(`f2 call result`, f2());

const x = {f3: function(){
    return this; // содержит ссылку на внешний объект (в данном случае на объект x)
}, f4 : function(){
    return x;
}, f5: () => {return this}}

console.log('--------------------')
console.log(`x.f3 (return this) call result`, x.f3());
console.log(`x.f4 (return x) call result`, x.f4());
console.log(`x.f5 call result`, x.f5());

console.log('----------rectangle (this)--------------')
this.width = 15; //this для функционаяльного выражения в объекте rectangle
this.heigth = 20;

const rectangle = {width: 20, heigth: 20, square: function(){
    return this.width * this.heigth;
}, perimetr: () => (this.width + this.heigth) * 2, perimetrFunc: function(){
    return (this.width + this.heigth) * 2 ;
}};

console.log(`square (function): ${rectangle.square()}`);
console.log(`perimetr (function expression): ${rectangle.perimetr()}`); //внешний this 
console.log(`perimetFunc (function): ${rectangle.perimetrFunc()}`);

console.log('----------bind (this) bind--------------')
const point = {x: 3, y: 4};

function displayPoint(z, t) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t = ${t}`)
}

displayPoint(10, 20);
const displayPoint1 = displayPoint.bind(point, 100, 200); //привязывает к функциональному объекту объект в качестве This и возврачает копию объекта
displayPoint1(10, 20); //параметры привязаны выше и имеют более высокий приоритет

console.log('----------call (this) call--------------')

const point_call = {x: 3, y: 4};

function displayPoint(z, t) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t = ${t}`)
}

displayPoint(10, 20);
displayPoint.call(point_call, 100, 300); //вызывает функциональный объект с привязанным объектом в качестве This (!!!Не возврачает)
displayPoint(20, 30);// параметры имеют вес

console.log('----------apply (this) apply--------------')

const point_aply = {x: 3, y: 4};

function displayPoint(z, t) {
    console.log(`x = ${this.x}, y = ${this.y}, z = ${z}, t = ${t}`)
}

displayPoint(10, 20);
displayPoint.apply(point, [100, 300]); //вызывает функциональный объект с привязанным объектом в качестве This 
                                        //!!!доп параметр передается в качестве массива(!!!Не возвращает)
displayPoint(20, 30);// параметры имеют вес

console.log('------------------------JSON----------------------------')

const rectangle1 = {width: 20, heigth: 20, square: function(){
    return this.width * this.heigth;
}, perimetr: () => (this.width + this.heigth) * 2, perimetrFunc: function(){
    return (this.width + this.heigth) * 2 ;
}};
const rectangle2 = {width: 20, heigth: 20, square: function(){
    return this.width * this.heigth;
}, perimetr: () => (this.width + this.heigth) * 2, perimetrFunc: function(){
    return (this.width + this.heigth) * 2 ;
}};

const rectangle5 = {width: 33, heigth: 20, square: function(){
    return this.width * this.heigth;
}, perimetr: () => (this.width + this.heigth) * 2, perimetrFunc: function(){
    return (this.width + this.heigth) * 2 ;
}};
//JSON stringify преобразует состояние объекта (его поля, кроме функциональных полей) в строку JSON "{имя поля: значение,...,имя поля: значение }"
const rec1 = JSON.stringify(rectangle1);
const rec2 = JSON.stringify(rectangle2);

console.log(`objects rectangle1 == rectangle2 are equel ${rectangle1 == rectangle2}`)
console.log(`JOSN objects rectangle1 and rectangle2 are equel ${rec1 == rec2}`)

console.log(JSON.stringify(rectangle1));

const rectangle3 = JSON.parse(rec1); //формирует объект из JSON строки
const rectangle4 = JSON.parse(JSON.stringify(rectangle5)); //глубокая копия объекта (его состояния) кроме функциональных полей
console.log(rectangle3);
console.log(rectangle4);


const rectangle7 = {width: 20, 
    heigth: 20, 
    square: function(){
    return this.width * this.heigth;
}, 
perimetr: () => (this.width + this.heigth) * 2, 
perimetrFunc: function(){
    return (this.width + this.heigth) * 2 ;
}, fff:{aaa: {ttt:5}, hhhh: 2}
};
let rectangle6 = {...rectangle7};
console.log(rectangle6.fff.aaa.ttt)
rectangle6 = JSON.parse(JSON.stringify(rectangle7));
console.log(rectangle6.fff.aaa.ttt)
