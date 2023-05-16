

function createPerson(id, name, year, country, city){
    return {id: id, name: name, year: year,
        address: {country: country, city: city}}
}

const kirill = createPerson(124,'kirill', 1989, 'Israel', 'BeerSheva');
const vika = createPerson(124,'vika', 1988, 'Israel', 'BeerSheva');
const vika2 = createPerson(124,'vika', 1988, 'Israel', 'BeerSheva');

const y = {x: 0};
//console.log(y[x]); // Reference error 
console.log(y['x']);
console.log(y.x);

delete y.x;

console.log(`after delete ${y.x}`);