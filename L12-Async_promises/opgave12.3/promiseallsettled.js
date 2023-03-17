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

Promise.allSettled([givePromise(), givePromise(), givePromise(), givePromise()]).then(values => {console.log(values);})

// Promise.allSettled returns a single promise containing all promises wether they were fulfilled or rejected.
// It gives a status which is either fulfilled or rejected,
// depending on the status it either shows the reason(for rejection) or the value of the promise.