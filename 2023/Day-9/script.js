// Challenge #9

// They are turning on the Christmas lights 🎄 in the city and, as every year, they have to be fixed!

// The lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they must always alternate. That is, if the first light is red, the second must be green, the third red, the fourth green, etc.

// We have been asked to write a function adjustLights that, given an array of strings with the color of each light, return the minimum number of lights that need to be changed for the colors to alternate.

function adjustLights(lights) {
    let green = 0;
    let red = 0;
  
    lights.forEach((light, index) => {
      if (index % 2) {
        if (light === "🔴") red++
  
        if (light === "🟢") green++
      } else {
        if (light === "🟢") red++
  
        if (light === "🔴") green++
      }
    })
    return Math.min(green, red)
  }