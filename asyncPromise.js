
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

   getId(idp => idp == id).then(id => getCar(id)).then(car => console.log(car))
}

displayCar('125');