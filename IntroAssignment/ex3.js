// Authors: Elad Silam 208112185
// Shai Salem : 314784372

// Ex3 program
// This program is using forEach loop to find how many elements in the array are zeros.


const arrOfIntegers = [100,0,20,70, 0]  // Expected : 2
let amountOfZeros = 0 // Initiallizing counter
arrOfIntegers.forEach(item=>(item===0)? amountOfZeros++ :null)
console.log(`The amount of zeros is : ${amountOfZeros}`)
