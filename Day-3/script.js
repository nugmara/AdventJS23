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