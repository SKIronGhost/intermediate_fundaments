// Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 4. Si el array es muy pequeño, devuelve null. 

var arr1 = [[5,2,3,6,4,9,7],3]
var arr2 = [[5,2],1]

function nLast ([a,b]){
  if(a.length<3){
    console.log(null)
  }
  else{
    console.log(a[a.length-b])
  }
}

console.log(nLast(arr1))
console.log(nLast(arr2))