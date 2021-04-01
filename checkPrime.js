function isPrime(n){
    for(i = 2; i < n; i++){
        // console.log(i, n % i);
        if(n % i == 0){
           return 'Not a prime numbber';
        }
    }
    
    return 'Your Number is a prime number';
}

var result = isPrime(139);
console.log(result);

