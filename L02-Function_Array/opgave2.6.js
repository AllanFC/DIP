function balanced(string){
    string = string.replaceAll(/[^()\[\]{}]/g, "");
    console.log(string);
    let arr = []
    for(let i = 0; i < string.length; i++){
        if(string[i] === "(" || string[i] === "[" || string[i] === "{"){
            arr.push(string[i])
        } else if(string[i] === ")" && arr[arr.length-1] === "(" ||
                  string[i] === "]" && arr[arr.length-1] === "[" ||
                  string[i] === "}" && arr[arr.length-1] === "{" ){
            arr.pop()
        } else{
            return undefined
        }
    }
    return true
}

let s = "(3+{5[99 {*}]}[23[{67}67]])";
console.log(balanced(s));