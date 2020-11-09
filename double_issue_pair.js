// Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].

var arr = [4, "Ulysses", 42, false]

function doubles(x){
  let z = []
  for(i=0;i<x.length;i++){
    if(Number.isInteger(x[i])){
      z.push(x[i])
      z.push(x[i])
    }
    else{
      z.push(x[i])
    }
  }
  return z
}

console.log(doubles(arr))