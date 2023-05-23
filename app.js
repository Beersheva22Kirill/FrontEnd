//what's wrong

// function sleep (timeout){
//     let flRunning = true;
//     setTimeout(() => flRunning = false, timeout); // тут проблема
//     while(flRunning);// и тут проблема (события выполняются только после выполнения скрипта)
// }

function sleep (timeout, ...functions){

    function sleepFn(){
        
        functions.forEach( f => f())
    }
    setTimeout(sleepFn, timeout);
   
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

sleep(3000, f1,f2,f3);
