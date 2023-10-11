// Removing Elements

function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

const arr = ["Keep", "Remove", "Keep", "Remove", "Keep", "Melon", "Jon Doris", "Banners"];
