// Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

var num = 3

function sigma(a){
  let sum = 0
  for(i=a;i>0;i--){
    sum = sum + i
  }
  return sum
}

console.log(sigma(num))

num = 5
console.log(sigma(num))

num = 20
console.log(sigma(num))
