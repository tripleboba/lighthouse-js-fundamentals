/*
function takes in an array of car objs and the speed of a car
return a new obj w/ a property speed & time
cars: array of car objs

the func creates a new obj {speed, time} & add to the cars array
return an array that includes all the elements in cars
*/

const carPassing = (cars, speed) => {
  let object = {
    time: Date.now(),
    speed: speed
  };
  cars.push(object);
  return cars;
};

// input values
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];
const speed = 38
