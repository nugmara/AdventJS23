function manufacture(gifts, materials) {
    const manufacturedGifts = [];
    
    for (let  i = 0; i < gifts.length; i++) {
      let gift = gifts[i]
      
      for (let j = 0; j < materials.length; j++) {
        // Check if the current material is present in the gift
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