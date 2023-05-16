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

// const f3 = () => {
//     return this;
// }

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
this.width = 15; //this для функционаяльного выражения גв объекте rectangle
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
                                        //!!!доп параметр передается в качестве массива(!!!Не возврачает)
displayPoint(20, 30);// параметры имеют вес