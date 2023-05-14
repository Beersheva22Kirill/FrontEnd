let ar = [];
ar[10] = 100;
ar[0] = 'Hello';
ar[3] = [1,2,3];
ar.length = 0; // to clear array
console.log(ar);
ar[0] = 1;
[] && console.log(true);

const ar_func = [function a1(){}, function a3(){}, function a2(){}];
const ar2 = [1,2,3];
const x = 3;
//add at array end
ar[ar.length] = 10;
ar.push(...ar2); /// ... (определяет множество) поэлементное добавление
ar.push(...ar_func);
ar.push(x);
ar[10];

//method 'map'
console.log([1,2,3].map(n => n ** 2));


//[... arr] operator
const arr = [];
arr.push(1,2);
arr.length = 6;
console.log(arr, " object with property length");
console.log([...arr], " realy array");

//join operator
const arrToJoin = [1,2];
console.log('<ol><li>' + arrToJoin.join('</li><li>') + '</li></ol>')

//splice method for updating array (1 parameter start, 2 parameter count of element to deleting, 3 parametr elemets to adding)
console.log('\n slice method\n')
const ars = [10,20,-70,100,6,-10,0];
const arrIn = ['string', 'string1'];
let index = ars.indexOf(-70); // method indexOf no predicate (только ==) return first element
ars.splice(++index,0,...arrIn);
ars.splice(ars.length,0,...arrIn);

console.log(ars.splice(++index,3));
console.log(ars);

//filter method
console.log('\n filter method\n')
const arF = [10,20,-70,100,6,-10,0];

//const arrIn = ['string', 'string1'];
console.log(arF.filter(e => e < 0));
let indexfirstNegativ = arF.findIndex(e => e < 0); // method findIndex with predicate return first element
let firstNegativ = arF.filter(e => e < 0)[0];
console.log(`first negative number ${firstNegativ}`)
console.log(`first index of negative number ${indexfirstNegativ}`)

//sort method
console.log('\nsort method\n')
const arSort = [10,20,-70,10,6,-10,0];
console.log(`array no sorter ${arSort}`);
console.log(`array sorter (no comparator) ${arSort.sort()}`);
console.log(`array sorter (with comparator) ${arSort.sort((a,b) => a - b)}`);
//(a,b) => a - b компаратор для сравнения (иначе он сортирует строки)

//every method
console.log('\n every method\n')
const arEv = [10,20,-70,10,6,-10,0];
const arEv2 = [10,20,30,10,6,3,0];
console.log(`all elements in array ${arEv} positive number ${arEv.every(e => e > 0)}`); // проверяет условие для всех елементов
console.log(`all elements in array ${arEv2} positive number ${arEv2.every(e => e >= 0)}`); 

//reduse method
console.log('\n reduse method\n')
const arReduce = [1,2,3];
console.log(`method reduce to array ${arReduce} . result ${arReduce.reduce((res,cur) => res + cur,2)}`);
// проходит массив и выполняет переданную функцию, возвращая результат
// второй параметр начальное значение


