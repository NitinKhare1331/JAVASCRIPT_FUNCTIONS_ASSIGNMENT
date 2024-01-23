function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn.apply(this,args);
        }
        else{
            return function (...args2){
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}
function add(a,b){
    return a+b;
}
let curriedadd = curry(add);
console.log(curriedadd(5)(7))