// Challenge #10

// What an idea Sam Elfman has had! He wants to offer a service that creates a customized Christmas tree 🎄 in a matter of seconds.

// To create it, we are given a string to form the tree and a number that indicates its height.

// Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the indicated height. At least, they will always pass us one.

// We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a final line with the trunk formed by the character | in the center and, finally, a newline \n.

// For example, if we receive the string "123" and the number 4 as height, we would have to build this tree:

// Notes:

// The tree should always be centered, for that reason add blank spaces to the left of each line.
// Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.
// The ornaments have a white space between them for separation.

// My solution was this:

function createChristmasTree(ornaments, height) {
    let tree = ""
    let ornamentsIndex = 0;
    for (let i = 0; i < height; i++) {
      // Add spaces to the center of the ornaments
      for (let j = 0; j < height - i - 1; j++) {
        tree += " "
      }
      // Add ornaments for this level
      for (let k = 0; k < i + 1; k++) {
        tree += ornaments[ornamentsIndex] + " ";
        ornamentsIndex = (ornamentsIndex + 1) % ornaments.length
      }
      tree += "\n";
    }
    for (let h = 0; h < height - 1; h++) {
      tree += " "
    }
    tree += "|" + "\n"
  
    return tree
  }

  // ! I have the same output as the second function I'm going to provide but for some reason it doesn't pass the tests.

  function createChristmasTree(ornaments, height) {
    let tree = "";
    const totalOrnaments = (height * (height + 1)) / 2;
    const allOrnaments = ornaments.repeat(totalOrnaments);
  
    let lastIndex = 0;
  
    for (let i = 1; i <= height; i += 1) {
      const spaces = " ".repeat(height - i);
      const ornamentRow = allOrnaments
        .slice(lastIndex, lastIndex + i)
        .split("")
        .join(" ");
  
      tree += spaces + ornamentRow + "\n";
  
      lastIndex += i;
    }
  
    tree += "|".padStart(height, " ") + "\n";
    return tree;
  }
