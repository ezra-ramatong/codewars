// Set alarm
function setAlarm(employed, vacation) {
  return employed && !vacation;
}

console.log(setAlarm(false, false));
