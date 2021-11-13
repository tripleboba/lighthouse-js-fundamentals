/*
build a function that creates a array of numbers
range from start, end, and step
  requirements: return empty [] if
  - start, end, step undefined
  - start > end
  - step <= 0
*/
const range = (start, end, step) => {
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }
  let result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}
