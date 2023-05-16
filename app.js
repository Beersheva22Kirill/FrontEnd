
function createPerson(id, name, year, country, city){
    return {id: id, name: name, year: year,
        address: {country: country, city: city}}
}

// возможно без объявления названия полей 
//(название ключа будет соответствовать имени параметра)
// function createPerson(id, name, year, country, city){
//     return {id, name, year, address: {country, city}}
// }



const person = {name: 'manually object', year: 1989, id: 123, 
adress: {country: 'Israel',city:'Rehovot'}};
console.log(person);

const kirill = createPerson(124,'kirill', 1989, 'Israel', 'BeerSheva');
const vika = createPerson(124,'vika', 1988, 'Israel', 'BeerSheva');
const vika2 = createPerson(124,'vika', 1988, 'Israel', 'BeerSheva');

console.log(vika);
console.log(kirill);

console.log(`\nvika == vika2 is ${vika == vika2}`);

console.log(kirill.name)
kirill.name = 'KIRILL'

console.log(kirill.name)
console.log(kirill["id"]);

function displayKeyValue(person, key) {
    console.log(`key ${key} is ${person[key]}`);
}

console.log('-------------Dsplay function---------------');
displayKeyValue(kirill, 'name');
displayKeyValue(kirill, 'address');
console.log('-------------Static object function---------------');

//methodt keys of Object returns array of key values
console.log("Keys ",Object.keys(kirill))
console.log("Keys of adress (inner) ",Object.keys(kirill.address))

//methodt values of Object returns array of  values
console.log("values", Object.values(kirill))

//methodt entries of Object returns array of arrays
//key first element, second value
console.log("entries", Object.entries(kirill))

const x = {};
console.log(x["ab"]);
x["ab"] = 10; // analog method put for MAP
x["ab"]++;
console.log(x["ab"]);
