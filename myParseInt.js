// 'String' or "String"
//`...${<expression>}`
const strNum = '1AG';
const radix = 16;
console.log(`\n(original function) string with number ${strNum} with radix ${radix} is ${parseInt(strNum, radix)}`, typeof parseInt(strNum, radix))
console.log(`(my function) string with number ${strNum} with radix ${radix}  is ${myParseInt(strNum, radix)}`, typeof myParseInt(strNum, radix))
console.log('\n----without radix----');
const strNum2 = '0x1AG';
let radix2;
console.log(`\n(original function) string with number ${strNum2} with radix ${radix2} is ${parseInt(strNum2)}`, typeof parseInt(strNum2))
console.log(`(my function) string with number My ${strNum2} with radix ${radix2}  is ${myParseInt(strNum2)}`, typeof myParseInt(strNum2) + '\n')

function myParseInt(number, radix){
    if (!radix || radix == 16) {
        if(checkHex(number)){
            number = getHexdecimalNumber(number);
            radix = 16;
        } else{
            radix = !radix ? 10 : 16;
        }
    }
    number = number.trim();
    let index = number.charAt(0) == '-' || number.charAt(0) == '+' ? 1 : 0;
    let res = checkRadix(radix) ? getDigitCode(number,index,radix) : NaN;
    
    if (!isNaN(res)) {
        let digit;
        index++;
        while(index < number.length && 
            !isNaN(digit = getDigitCode(number,index,radix))){
                res = res * radix + digit;
                index++;
        }
    }
    if (number[0] == '-') {
        res = -res;
    }
    return res;
}

function checkHex(number){
    let res = false;
    if (number[0] == '-') {
            if(number[1] == "0" && number[2] == 'x'){
            res = true
        }
    } else {
            if(number[0] == "0" && number[1] == 'x'){
            res = true
        }
    }
    return res
}

function getHexdecimalNumber(number){
   
    return number[0] == '-' ? '-' + number.substring(3) : number.substring(2);
}


function checkRadix(radix){
    let res = true;
    if (radix < 2 || radix > 36)  {
        res = false;
    }
    return res;
}

function getDigitCode(number, index, radix){
    const delta = 'a'.charCodeAt(0) - 10;
    const symbol = number.charAt(index).toLowerCase();
    const code = symbol >= '0' && symbol <= '9' ? +symbol : symbol.charCodeAt(0) - delta;
    return code >= 0 && code < radix ? code : NaN;
}
