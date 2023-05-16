

function displayOccurences(array){
    const object = {};
    array.map(key => object[key] = object[key] == undefined ? 1 : ++object[key]);
    let entries = Object.entries(object);
    entries.sort((a,b) => {
        let res = 0
        if (a[1] > b[1]) {
            res = -1
            } else if (a[1] < b[1]){
                res = 1
                } else if(a[0] > b[0]){
                    res = 1
                    } else {
                        res = -1
        }
        return res;
    });
    entries.map(em => console.log(`${em[0]} -> ${em[1]}`)) 
}

function displayOccurencesYuri(array){
    const object = array.reduce((object,s) => {
        object[s] = object[s] ? object[s] + 1 : 1;
        return object;
    }, {}) 
    Object.entries(object).sort((e1,e2) => e1[1] == e2[1] ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1])
    .forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}

function displayOccurencesSuperYuri(array){
    const object = array.reduce((object,s) => ({...object, [s]: object[s] ? object[s] + 1 : 1 }), {}) 
    Object.entries(object).sort((e1,e2) => e1[1] == e2[1] ? e1[0].localeCompare(e2[0]) : e2[1] - e1[1])
    .forEach(e => console.log(`${e[0]} -> ${e[1]}`))
}


console.log('------------My example----------------')
displayOccurences(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a', 'a','lmn'])
console.log('------------Yuri example----------------')
displayOccurencesYuri(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a', 'a','lmn'])
console.log('------------Super Yuri example----------------')
displayOccurencesSuperYuri(['lmn', 'ab', 'lmn', 'c', 'd', 'ab', 'a', 'a','lmn'])