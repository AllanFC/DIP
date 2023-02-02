let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

function bubbleSort(list){
    for (let i = list.length - 1; i >= 0; i--) {
        const swap = (a, b) => [list[a], list[b]] = [list[b], list[a]]
        for (let j = 0; j <= i - 1; j++) {
            if (list[j] > list[j + 1]) {
                swap(j, j+1);
            }
        }
    }

}

bubbleSort(list)
console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

function binarySearch(list, element){
    let target = element;
    let index = -1; 
    let left = 0; 
    let right = list.length-1; 
    while (index == -1 && left <= right) { 
        let middle = Math.floor((left + right) / 2);
        let k = list[middle]; 
        if (k == target) 
            index = middle; 
        else if (k > target) 
            right = middle - 1; 
        else  
            left = middle + 1; 
    }
    return index == -1 ? undefined : index
}
console.log(binarySearch(list, 8)); 