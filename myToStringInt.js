

function myToStringInteger (number, radix) {
    let res = "";
        if (number != 0) {
            if (radix < 2 || radix > 36) {
               radix = 10;
            }
            number = Math.round(number);
            let flag = false;
            if (number < 0) {
                number = -number;
                flag = true;
            }
            while (number > 0) {
                let rem = number%radix
                if (rem > 9) {
                    res = String.fromCharCode(rem + 87) + res
                } else{
                    res = rem + res
                }
                
                number = Math.trunc(number/radix)
            }

            if(flag){
            res = "-" + res;
            }
        } else {
            res = "0"; 
        }
    return res;
}

function yuriToStringInteger (number, radix) {
    const sign = number < 0 ? '-' : '';
    number = Math.abs(number);
    number = Math.round(number);
    if (radix < 2 || radix > 36) {
        radix = 10;
     }
    let res = '';
    do {
        res = getSymbol(number, radix) + res;
        number = Math.trunc(number / radix);
    }while (number != 0)

    return sign + res;
}

function getSymbol(number,radix) {
    const aCode = 'a'.charCodeAt(0);
    const delta = aCode - 10;
    const rem = number%radix;

   return rem < 10 ? rem + '' : String.fromCharCode(rem + delta);     
}

let a = yuriToStringInteger(123456789, 16)
console.log(a, typeof a)
let b = myToStringInteger(123456789, 16)
console.log(b, typeof b)
let c = (123456789).toString(16)
console.log(c, typeof c)

let errors = 0;
for(let radix = 2; radix < 37; radix++){
    for (let i = -1000; i< 1001; i++){
        if (myToStringInteger(i,radix) != i.toString(radix)) {
            errors++;            
        }
    }
}
console.log("Errors count = " + errors)