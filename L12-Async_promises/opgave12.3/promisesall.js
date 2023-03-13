async function givePromise(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let number = Math.floor(Math.random() * 11);
            // let number = 8 // test to reject all promises
            if(number < 7){
                resolve(number);
            } else if(number < 10){
                reject(number);
            } else {
                throw new Error(number);
            }
        })
    })
}

Promise.all([givePromise(), givePromise(), givePromise(), givePromise()]).then(values => {console.log(values);}).catch(err => {console.log(err);})


// Promise.all return value is depending on the promises run, if any of the promises fails
// Promise.all will return the first promise that failed and stop.
// however if all the promises succeeds it will return an array of the values from the resolved promises.
// This is good if you got code running asyncronous that depend on eachother.