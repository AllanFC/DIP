function sieveOfAtkin(limit){
    let knownPrimes = [2,3,5]
    let primes = [];

    if(limit > 2){
        primes.push(2);
    }
    if(limit > 3){
        primes.push(3);
    }

    //Create list of numbers up to limit
    let numbers = [];
    numbers[limit+1] = 0;
    for (let i = 0; i <= limit; i++){
        numbers[i] = false;
    }

    for(let x = 1; x * x <= limit; x++){
        for(let y = 1; y * y <= limit; y++){

            let n = 4*x*x + y*y;
            if(n <= limit && n % 12 == 1 || n % 12 == 5){
                numbers[n] = true;
            }

            n = 3*x*x + y*y;
            if(n <= limit && n % 6 == 1){
                numbers[n] = true;
            }

            n = 3*x*x - y*y;
            if(n <= limit && n % 12 == 11 ){
                numbers[n] = true;
            }
        
            for(let i = 5; i * i <= limit; i++){
                if(numbers[i]){
                    for(let j = i * i; j <= limit; j += i * i){
                        numbers[j] = false;
                    }
                }
            }
        }
    }
    for(let i = 5; i <= limit; i++){
        if(numbers[i]){
            primes.push(i)
        }
    }

    console.log(primes);
}

sieveOfAtkin(1000);
