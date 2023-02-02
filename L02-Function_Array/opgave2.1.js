//Max in array
let arr = [1,4,9,3,8];
console.log(Math.max(...arr))

function maxInArr(array){
    let max = array[0];
    for(let n of array){
        if(n > max){
            max = n;
        }
    }
    return max;
}
console.log(maxInArr(arr))

//contains
function inArr(array, element){
    return element in array
}

console.log(inArr(arr,3))
console.log(inArr(arr,10))

//sum
function sumOfArr(array){
    let sum = 0;
    for(let n of array){
        sum += n;
    }
    return sum;
}

console.log(sumOfArr(arr))