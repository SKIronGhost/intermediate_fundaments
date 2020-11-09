// Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

var num = 3

function sigma(a){
  let pro = 1
  for(i=a;i>0;i--){
    pro = pro * i
  }
  return pro
}

console.log(sigma(num))

num = 5
console.log(sigma(num))

num = 20
console.log(sigma(num))