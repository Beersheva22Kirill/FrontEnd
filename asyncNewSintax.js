function sleep (timeout){
    return new Promise(resolve => setTimeout(() => resolve(), timeout))
}

function f1(){
    console.log(`func 1 performed`)
}

function f2(){
    console.log(`func 2 performed`)
}

function f3(){
    console.log(`func 3 performed`)
}




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

async function displayCar(idParam){
    try {
        const id = await getId(idPred => idPred == idParam)
        const car =  await getCar(id)
        console.log(car);
    } catch (error) {
        console.log(error);
    }
}

displayCar('127').then(() => console.log('finish of search'));

console.log('wating for the date...')