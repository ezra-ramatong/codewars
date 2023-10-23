// Spin Around, Touch the Ground

// iterate over list
// degrees = 0
// spins = 0
// if left: degrees -= 90
// if right: degrees += 90
// return spins = degrees / 90

function spinAround(turns) {
  let degrees = 0;
  for (const direction of turns) {
    degrees += (direction === "right") ? 90 : -90;
  }
  return Math.floor(Math.abs(degrees / 360));
}

console.log(spinAround([]))


