// Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null. 

var arr1 = [42,true,4,"Liam", 7]
var arr2 = [1,5,10,-2]
var arr3 = [1,3,"comida","hola","comida"]

function penultimate(x){
  console.log(x[x.length-2]);
}

console.log(penultimate(arr1))
console.log(penultimate(arr2))
console.log(penultimate(arr3))