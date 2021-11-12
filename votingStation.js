// chooseStations(stations) function that takes in an array
// of possible voting stations
// only returns the names of the stations that are appropriate.
// reqs: cap at least 20 and school / community centre

const chooseStations = stations => {
  let holder = [];

  for ( let station of stations) {
    if (station[1] >= 20) {
      if (station[2] === 'school' || station[2] === 'community centre') {
        holder.push(station[0]);
      }
    }
  }
  return holder;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);