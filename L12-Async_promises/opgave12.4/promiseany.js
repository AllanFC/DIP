async function givePromise(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let number = Math.floor(Math.random() * 11);
            //let number = 8 // test to reject all promises
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

Promise.any([givePromise(), givePromise(), givePromise(), givePromise()]).then(values => {console.log(values);}).catch(err => {console.log(err.message)})


// Promise.any returns the FIRST promise that fulfills and leaves the rest,
// if all promises are rejected then it throws an error "Uncaught AggregateError AggregateError: All promises were rejected"
// it will however still throw errors if any of the promises fails

