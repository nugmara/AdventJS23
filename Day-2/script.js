// Challenge #2
// We start a factory

/* 
In Santa's workshop, the elves have a gift list they wish to make and a limited set of materials.

Gifts are strings of text and materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be made.

A gift can be made if we have all the necessary materials to make it.
*/

function manufacture(gifts, materials) {
    const manufacturedGifts = [];
    
    for (let  i = 0; i < gifts.length; i++) {
      let gift = gifts[i]
      
      for (let j = 0; j < materials.length; j++) {
        // Check if the current material is present in the gift

        //! At first I put an if statement here to check if the gift includes the material, but it didn't work. Why?
        //! Instead we should use a while loop to check if the gift includes the material, because we want to remove all the instances of the material from the gift.
        //! If we use an if statement, it will only remove the first instance of the material from the gift.
        while (gift.includes(materials[j])) {
        // If yes, remove it from the gift
          gift = gift.replace(materials[j], "")
        }
      }
      if (gift.length === 0) {
        manufacturedGifts.push(gifts[i])
      }
      // Check if the modified gift can be made with the available materials
      // If yes, push it to manufacturedGifts
    }
    return manufacturedGifts
  }