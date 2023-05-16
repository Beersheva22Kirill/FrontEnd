
function isAnagram(word,anagram){
let res = false;
if (word.length == anagram.length) {
    res = true;
    const arrWord = Array.from(word);
    const arrAnagram = Array.from(anagram);
    const objectWord = arrWord.reduce((object,s) => ({...object, [s]: object[s] ? object[s] + 1 : 1 }), {}) 
    const objectAnagram = arrAnagram.reduce((object,s) => ({...object, [s]: object[s] ? object[s] + 1 : 1 }), {}) 
    const arrKeys = Object.keys(objectWord);   
    let index = arrKeys.length - 1;
        
    while(index > -1 && res){
        if (objectWord[arrKeys[index]] != objectAnagram[arrKeys[index]]) {
            res = false;
        }
        index--;
    }        
}
    
return res
}

function getOccurences(array){
    return  array.reduce((object,s) => ({...object, [s]: object[s] ? object[s] + 1 : 1 }), {})
}

function isAnagramYuri(word,anagram){
    let res = false;
    if(word.length === anagram.length){
        word = word.toLowerCase();
        const occurences = getOccurences(Array.from(word));
        res = Array.from(anagram).every(s => occurences[s]-- > 0);
    }
    return res;
}

console.log(isAnagram('abras','baraf'))
console.log(isAnagramYuri('abras','baraf'))