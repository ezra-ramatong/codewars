// Total amount of points

function points(games) {
  let x = 0;
  let y = 0;
  let xPoints = 0;

  for (let i = 0; i < games.length; i++) {
    x = games[i].slice(0, 1);
    y = games[i].slice(2);

    if (x > y) xPoints += 3;
    if (x === y) xPoints += 1;
  }

  return xPoints;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]));
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]));
