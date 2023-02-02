const compare = (s1, s2) => {
    if(s1 > s2)
        return 1;
    else if (s2 > s1)
        return -1;
    else
        return 0;
}
console.log(compare("Benny","Alex"));

const compareLen = (s1, s2) => {
    if(s1.length > s2.length)
        return 1;
    else if (s2.length > s1.length)
        return -1;
    else
        return 0;
}
console.log(compareLen("Alex", "Benny"));

const compareIgnoreCase = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    if(s1 > s2)
        return 1;
    else if (s2 > s1)
        return -1;
    else
        return 0;
}
console.log(compareIgnoreCase("benny","Benny"));


function bubbleSort(list, compareFunc){
    const swap = (a, b) => [list[a], list[b]] = [list[b], list[a]]
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compareFunc(list[j], list[j+1]) == 1) {
                swap(j, j+1);
            }
        }
    }
}
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];
bubbleSort(list,compare)
console.log(list)