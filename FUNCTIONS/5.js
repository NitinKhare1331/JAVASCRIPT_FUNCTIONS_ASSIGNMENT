function factorial(n){
    if (n==0) return 1;
    let result = n*factorial(n-1);
    return result;
}
console.log(factorial(10));
console.log(factorial(1));
console.log(factorial(23));
console.log(factorial(449));