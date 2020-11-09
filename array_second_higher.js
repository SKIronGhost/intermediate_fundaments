// Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy pequeño, devuelve null.

var arr1 = [42,1,3.14,7]
var arr2 = [5,2]

function secondHigher (x){
  if(x.length<3){
    console.log(null)
  }
  else{
    let a = 0
    let b = 0
    for(i=0;i<x.length;i++){
      if(x[i]>a){
        a = x[i]
      }
      if(x[i]<a && x[i]>b){
        b = x[i]
      }
    }
    console.log(b)
  }
}

console.log(secondHigher(arr1))
console.log(secondHigher(arr2))