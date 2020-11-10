function fib(n){
  if(n == 0 || n == 1){
    return n
  }
  else{
    return fib(n-2)+fib(n-1)
  }
}

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(11))
console.log(fib(13))
console.log(fib(17))