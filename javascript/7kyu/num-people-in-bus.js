// Number of People in the bus

// return the number of people who are still on the bus after the last bus stop
// input: [ [n entries, n exits], [n entries, n exits] ] <------ each sub-array
// represents a bus stop
//

/* const testBusStop = [[10, 20], [20, 30], [5, 8]];

let totalPassengers = 0;

for (let i = 0; i <= testBusStop.length - 1; i++) {
  totalPassengers += testBusStop[i][0] - testBusStop[i][1];
  console.log(`bus ${i + 1}`, "entries ", testBusStop[i][0]);
  console.log("exits ", testBusStop[i][1], "\n");
}

console.log(totalPassengers); */

/* var number = function(busStops) {
  let totalPassengers = 0;
  for (let i = 0; i <= busStops.length - 1; i++) {
    totalPassengers += busStops[i][0] - busStops[i][1];
  }
  return totalPassengers;
} */

var number = function(busStops) {
  let totalPassengers = 0;
  for (let stop of busStops) {
    totalPassengers += stop[0] - stop[1];
  }
  return totalPassengers;
}


const testArr = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]];

console.log(number(testArr));
