
function getRandomIntNumber(min, min_inclusice = true, max, max_inclusive = false){

    if (!min_inclusice) {
        min++;
    } 
    if (max_inclusive) {
        max++;
    }
 
    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}

function getArrayRandomIntNumber(nNumbers, min, max, min_inclusice = true, max_inclusive = false){  
    const array = [];
    array.length = nNumbers;
 
    return [...array].map(element => getRandomIntNumber(min,min_inclusice,max,max_inclusive));
}

function getMatrixRandomNumber(rows, columns, min, max){  
    const array = [];
    array.length = rows;
    return [...array].map(element => getArrayRandomIntNumber(columns,min,max) );
}


function getOrderedList(array) {
    //'<ol><li>' + array.join('</li><li>') + '</li></ol>' вариант без map
    let res = `<ol>${getListItem(array)}</ol>`

    return res
}

function getListItem(array) {

    return array.map(v => getRow(v)).join('');
}

//bodyId.innerHTML = getOrderedList(getArrayRandomIntNumber(10,0,1,true,true))

// console.log(getArrayRandomIntNumber(10,1,6));
// console.log('/nordered list/n');
// console.log(getOrderedList(getArrayRandomIntNumber(5,1,6)))
// console.log(getOrderedList(["item1","item2","item3","item4","item5",]))

console.log(getMatrixRandomNumber(5,6,0,2));


