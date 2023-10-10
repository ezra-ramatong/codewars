// Friend of Foe?
function friend(friends) {
  return friends.filter(friend => friend.length === 4);
}

const testFriends = ["Ryan", "Kieran", "Mark"];
const testFriends2 = ["Ryan", "Jimmy", "123", "4", "Cool Man"];

console.log(friend(testFriends));
console.log(friend(testFriends2));
