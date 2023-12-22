// Challenge #3
// The naughty elf

/* 
In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.
*/


function findNaughtyStep(original, modified) {
    let result = "";
 
   for (let i = 0; i < modified.length; i++) {
     if (original[i] !== modified[i]) {
       return modified[i]
     }
   }
   return result;
 }

 //! I have just one text failed AND I DON'T KNOW WHY
 // This is the test failed:
 // 

 /*  
 Test: findNaughtyStep('stepfor', 'stepor')

Expected:
"f"

Actual:
"o"
 */ 

// Another way to do it

function findNaughtyStep(original, modified) {
    for (let i = 0; i < Math.max(original.length, modified.length); i++) {
     if (original[i] !== modified[i]) {
       return modified[i];
     }
   }
 
   // If one string is a prefix of the other, return the first extra character
   return original.length < modified.length ? modified[original.length] : "";
 }
 
 // The output should be "f" but I am getting "o" instead. Why?

 //? The Solution

 /**
 * Find the first different char between two strings.
 *
 * @param {string} original - The original string.
 * @param {string} modified - The modified string.
 * @return {string} The first difference between the original and modified string.
 */
function findNaughtyStep(original, modified) {
    // We start by declaring the index we will be iterating
    let i = 0;
  
    // While i is less than the sizes of both strings
    // we go through each one to compare them
    while (i < original.length || i < modified.length) {
      // If the char from the original string is different from the char in the modified string,
      // If they are the same we continue iterating and adding 1 to the index
  
      if (original[i] !== modified[i]) {
        // If the original string has more characters than the modified string,
        // return the char from the original string.
        // otherwise, return the char from the modified string
        return original.length > modified.length ? original[i] : modified[i];
      }
  
      i += 1;
    }
  
    return '';
  }

