function hero(bullets, dragons) {
  const bulletsToKillDragons = 2;
  return bullets >= (dragons * bulletsToKillDragons);
}

console.log(hero(100, 40))
