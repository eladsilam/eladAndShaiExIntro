// Authors: Elad Silam 208112185
// Shai Salem : 314784372

// Ex 1 program.

const num = 100; // expected result 1,2
// const num = 30 // expected result 1,2,3
// const num = 123 // expected result 1
Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) && console.log("1"); // A

Number((num % 2 === 0 && num % 3 === 0) || (num % 5 === 0 && num % 2 === 0)) &&
  console.log("2"); // B

Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) && console.log("3"); // C
