
function getId(predicate){
    const allId = [123,124,125,126,127];
    const index = allId.findIndex(predicate);
    return allId[index];

}


function getCar(id){
    const cars = {
        '123' : 'suzuki',
        '124' : 'hundai',
        '125' : 'honda'
    }

    const car = cars[id];
    return car
}

function displayCar(id){
    //const i = getId(idp => idp == id);
    // const car = getCar(getId(idp => idp == id));
    console.log(getCar(getId(idp => idp == id)));
}

displayCar('125');