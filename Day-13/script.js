// Challenge #13

function calculateTime(deliveries) {
  
      
    const deliveriesToNumber = deliveries.map((number) => {
    const [hours, minutes, seconds] = number.split(":");
    return parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10)
    })
    const totalSeconds = deliveriesToNumber.reduce((acc, curr) => acc + curr, 0);
      
    const totalTimeString = "07:00:00"
    const totalSecondsFromTotalTimeString = parseTotalTimeString(totalTimeString)
    const remainingSeconds = totalSecondsFromTotalTimeString - totalSeconds;
    const remainingTimeString = secondsToHMS(Math.abs(remainingSeconds));
      
      function parseTotalTimeString(totalTimeString) {
        const [hours, minutes, seconds] = totalTimeString.split(":");
        return parseInt(hours, 10) * 3600 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
      }
      
    
      function secondsToHMS(deliveries) {
        const hours = Math.floor(deliveries / 3600);
        const minutes = Math.floor((deliveries % 3600) / 60);
        const remainingSeconds = deliveries % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2,           "0")}:${remainingSeconds.toString().padStart(2,"0")}`;
      }
      
      if (totalSeconds < totalSecondsFromTotalTimeString) {
        return `-${remainingTimeString}`;
      } else {
        return remainingTimeString;
      }
    }