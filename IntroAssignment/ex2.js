// Authors: Elad Silam 208112185
// Shai Salem : 314784372

// Ex 2 program.

/*
Function that gets a number and checks whether its prime or not.
Returns boolean data type accordingly.
*/
function isPrime(num) {
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Main program to print all the prime numbers lower than 237.

const upperLimit = 237;
for (
  let currentNumToCheck = 2;
  currentNumToCheck < upperLimit;
  currentNumToCheck++
) {
  if (isPrime(currentNumToCheck)) {
    console.log(currentNumToCheck);
  }
}
