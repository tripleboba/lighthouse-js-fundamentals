// calculate the position based on an array 
// of directional moves [north, west,...] on
// an x - y grid

const finalPosition = moves => {
  let x = 0;
  let y = 0;
  for (let move of moves) {
    if (move === 'north') y++;
    else if (move === 'south') y--;
    else if (move === 'west') x--;
    else if (move === 'east') x++;
  }
  return [x, y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));