/*
parameters:
  - vegetables: an array of objs
  - metric: str (characteristic to be picked)
return the submitter of the king of vegetable contest
*/
const judgeVegetable = (vegetables, metric) => {
  let holder = 0;
  let winner;
  for (let info of vegetables) {
    if (info[metric] > holder) {
      holder = info[metric];
      winner = info['submitter'];
    }
  }
  return winner;
};

// input values
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
console.log(judgeVegetable(vegetables, metric));