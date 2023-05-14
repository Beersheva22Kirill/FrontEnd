ar = [2,3,123,200,99,-5]; // interview example

console.log(ar.sort((a,b) => a - b) + ' we are comparing numbers');
console.log(ar.sort() + ' we are comparing strings'); // без компаратора сравниваются строки

//(a,b) => a - b компаратор для сравнения (иначе он сортирует строки)