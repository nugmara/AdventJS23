// Challenge #5

// Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

// . = Road
// S = Santa's Sled
// * = Open barrier
// | = Closed barrier
// Example of a road: S...|....|.....

// Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

// All barriers start closed, but after 5 units of time, they all open forever.

// Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:

// const road = 'S..|...|..'
// const time = 10 // units of time
// const result = cyberReindeer(road, time)

/* -> result:
 [
   'S..|...|..', // initial state
   '.S.|...|..', // sled advances on the road
   '..S|...|..', // sled advances on the road
   '..S|...|..', // sled stops at the barrier
   '..S|...|..', // sled stops at the barrier
   '...S...*..', // barrier opens, sled advances
   '...*S..*..', // sled advances on the road
   '...*.S.*..', // sled advances on the road
   '...*..S*..', // sled advances on the road
   '...*...S..', // passes through the open barrier
 ]
*/
// The result is an array where each element shows the road at each unit of time.

// Take into account that if the sled is in the same position as a barrier, then it takes its place in the array.

function cyberReindeer(road, time) {
    // Almacena el estado de la carretera en cada unidad de tiempo
      const roadStates = [road]
    // Encuentra la posiciónn del trineo (S)
      let sledPosition = road.indexOf("S")
    // Cáracter que será reemplazado por el trineo cuando se mueve
      let replacedChar = "."
    // Itera por cada unidad de tiempo, menos 1, ya que el estado inicial ua está incluido
      for (let i = 0; i < times - 1; i++) {
    // Obtén el estado actual de la carretera
        let currentPosition = roadStates[i]
    // En la quinta iteración (unidad de tiempo 5), todas las barreras se abren
        if (i === 4) {
          currentPosition = currentPosition.replace(/[|]/g, "*")
        }
    // Verifica su la siguiente posición del trineo no es una barrera cerrada
        if (currentPositon[sledPosition + 1] !== "|") {
    // Prepara la nueva posición del trineo
    // Concatenándolo al elemento que anteriormente estaba en esa posición
          const newSledPosition = `${replacedChar}S`
    // Actualiza el carácter reemplazado por el trineo antes de ser reemplazado
        replacedChar = currentPosition[sledPosition + 1];
    // Construye el nuevo estado de la carretera con el trineo movido una posición
        const firstPart = currentPosition.substring(0, sledPosition);
        const lastPart = currentPosition.substring(sledPosition + 2);
        currentRoadState = firstPart + newSledPosition + lastPart;
    // Actualiza la posisicón del trineo
        sledPosition += 1;
        }
    // Añade el estado actualizado de la carretera al array
      roadStates.push(currentPosition)
      }
      return roadStates;
    }