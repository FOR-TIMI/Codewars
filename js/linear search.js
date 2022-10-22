
/**
 * A linear search looks at every index in sequential order. 
 * It works, but a lot of time is wasted looking at indexes that don't matter.
 */

function findIndex(arr,num){

    for(let i =0; i < arr.length; i++){
        if(arr[i] === num) return `${num} was found on index ${i}`;
    }

    return `That number does not exist`
}

console.log(findIndex([12, 23, 38, 40, 54, 62, 71, 87, 99],99))