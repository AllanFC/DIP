async function get() {
    const respons = await fetch("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new");
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
    
}

async function givePromise(number){
    return new Promise(function(resolve, reject){
        if(number < 4){
            resolve(number);
        } else if(number < 7){
            reject(number);
        } 
    })
}

listOfPromises = get().then(value => {return givePromise(value);});


Promise.all(listOfPromises).then(values => {console.log(values);}).catch(err => {console.log(err);})


// Promise.all return value is depending on the promises run, if any of the promises fails
// Promise.all will return the first promise that failed and stop.
// however if all the promises succeeds it will return an array of the values from the resolved promises.
// This is good if you got code running asyncronous that depend on eachother.