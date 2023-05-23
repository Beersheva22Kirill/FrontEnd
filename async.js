
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

const promise = sleep(3000);
promise.then(() => f1()).then(() => f2()).then(() => f3());