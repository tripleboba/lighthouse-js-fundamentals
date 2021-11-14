/* 
function to count the increasing of garbage in different category
using objs
trash: what type of item str
bins: an object with 3 properties (waste, recycling, compost)
      have numerical value
>>> function increases the correct value in the bins obj
*/

const smartGarbage = (trash, bins) => {
  for (let key in bins) {
    if (trash === key) bins[key]++;
  }
  return bins;
}