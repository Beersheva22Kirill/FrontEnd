
function getId(predicate){
    const allId = [123,124,125,126,127];
    const index = allId.findIndex(predicate);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return index < 0 ? reject("id not found") : resolve(allId[index])
        }, 1000);
    })

}


function getCar(id){
    const cars = {
        '123' : 'suzuki',
        '124' : 'hundai',
        '125' : 'honda'
    }

    const car = cars[id];
    return new Promise((resolve, reject) => 
        setTimeout(() => car ? resolve(car) : reject('no car found'),1000))
}

function displayCar(id){

   return getId(idp => idp == id)
   .then(id => getCar(id))
//    .catch(error => {
//     console.log(error) // неправильная реализация 
//     return 'mers'// (catch возвращает что то и продолжается выполнение по then)
// })
   .then(car => console.log(car))
   .catch(error => {
    console.log(error)
    })
   .finally(() => console.log('block finaly'))
}

displayCar('125').then(() => console.log('finish function'));

console.log('wating for the date...')