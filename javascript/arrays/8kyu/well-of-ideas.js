/* Well of Ideas - Easy Version (8kyu)*/

function well(array) {
  if (!array.includes("good")) return "Fail!";
  if (array.filter((element) => element === "good").length > 2) {
    return "I smell a series!";
  } else return "Publish!";
}
