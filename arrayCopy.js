

function arrayCopy(src, posSrc, dest, posDest, length){
        src.splice(0,posSrc);
        dest.splice(posDest,length,...src);
    return dest;
}

function moveElement(array, position, shift){
    if(position > -1){
        const element = array[position];
        let positionNew = position + shift;
        let copyAr =[];
        copyAr = arrayCopy(array,0,copyAr,0,array.length);
        array.splice(position,array.length - 1);
        array.splice(position,0,...copyAr.splice(++position,copyAr.length - position));
        
        positionNew = positionNew > 0 ? position < array.length ? positionNew :array.length : 0;
        array.splice(positionNew,0,element);
    }
    
    return array;
}
ar = [1,2,3,4,5,6,7]
ar1 = ['a','b','c','d','e','f','g','h','s','o','p'];
console.log(`Method arrayCopy ${arrayCopy(ar,0,ar1,2,7)}`)

ar2 = [1,2,3,4,5,6,7]
console.log(`Method moveElement [${moveElement(ar2,2,-1)}]`)

