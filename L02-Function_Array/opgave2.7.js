//Max
let arr = [1,4,9,3,8];
arr.max = () => {
    let max = arr[0];
    for(let n of arr){
        if(n > max){
            max = n;
        }
    }
    return max;
}

console.log(arr.max());


//Contains
arr.contains = target => {
    return target in arr
}

console.log(arr.contains(10));
console.log(arr.contains(3));


//Sum

arr.sum = () => {
    let sum = 0;
    for(let n of arr){
        sum += n;
    }
    return sum;
}

console.log(arr.sum());