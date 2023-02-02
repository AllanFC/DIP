
let list1 = [1,5,6,7,9,10];
let list2 = [2,4,8,11,19,20,30];
let result = [];
let i1 = 0;  
let i2 = 0; 
while (i1 < list1.length && i2 < list2.length) { 
    if (list1[i1] < list2[i2]) { 
        result.push(list1[i1]);
        i1++; 
    } else if (list1[i1] > list2[i2]) { 
        result.push(list2[i2]);
        i2++; 
    } else {                                
        result.push(list1[i1]); 
        i1++; 
    } 
}

while(i1 < list1.length){
    result.push(list1[i1]);
    i1++;
}

while(i2 < list2.length){
    result.push(list2[i2]);
    i2++;
}

console.log(result); 
