// Challenge #4

// In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: the words within the brackets must be read backwards.

// Santa needs these messages to be correctly formatted. Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

// However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.

function decode(message) {
    // Check if the message includes an opening parenthesis
    if (message.includes("(")) {
      // If yes, call the reverseOnce function and recursivelt call decode
      return decode(reverse(message))
    } else {
      // If no opening parenthesis is found, return the message as is 
      return message
    }
  }
  
  // Function to reverse the characters inside the first pair of the parentheses
  function reverse(message) {
    // Regular expression to match the content inside the first pair of parentheses
    let regexp = /\(([^()]*)\)/i;
    // Extract the substring inside the parentheses
    let subStr = regexp.exec(message)[1];
    // Reverse the characters in the substring
    subStr = subStr.split("").reverse().join("")
    // Replace the original substring with the reversed one in the message
    return message.replace(regexp, subStr)
  }
  
/* 
decode function:

The decode function takes a message as input.
It checks if the message includes an opening parenthesis (().
If an opening parenthesis is found, it calls the reverseOnce function with the message and recursively calls itself with the result.
If no opening parenthesis is found, it returns the unchanged message.
reverseOnce function:

The reverseOnce function takes a message as input.
It uses a regular expression (/\(([^()]*)\)/i) to match the content inside the first pair of parentheses.
It extracts the substring inside the parentheses using regexp.exec(message)[1].
It reverses the characters in the substring using split("").reverse().join("").
It replaces the original substring with the reversed one in the message using message.replace(regexp, subStr).
The modified message is then returned.
Calling decode with 'sa(u(cla)atn)s':

The outermost call of decode is with the message 'sa(u(cla)atn)s'.
It has an opening parenthesis, so it calls reverseOnce.
reverseOnce reverses the characters inside the first pair of parentheses ('cla') and replaces it in the message.
The updated message is 'sa(ualc)atn)s', and the decode function is called recursively.
The recursive call finds another opening parenthesis, calls reverseOnce again, and repeats the process.
Eventually, all pairs of parentheses are reversed, and the final result is logged to the console (in the corrected console.log statement).
*/

// ? Other method

function decode(message) {
    while (message.includes("(")) {
      message = reverseOnce(message);
    }
    return message;
    
    function reverseOnce(message) {
      let regexp = /\(([^()]*)\)/i;
      let subStr = regexp.exec(message)[1];
      subStr = subStr.split("").reverse().join("");
      return message.replace(regexp, subStr);
    }
  }

  /* 
In this version, the decode function uses a while loop to repeatedly call the reverseOnce function until there are no more opening parentheses in the message. This eliminates the need for recursion and can make the code clearer in terms of control flow. The loop continues as long as there are opening parentheses in the message. Once the loop completes, the modified message is returned.

This change should not affect the functionality of the code; it just provides an alternative way to structure the control flow.
*/