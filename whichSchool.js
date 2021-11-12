const whichSchool = age => {
  // switch(true){
  //   case age < 13:
  //     return 'Elementary School';
  //     break;
  //   case age >= 13 && age <=18:
  //     return 'Secondaray School';
  //     break;
  //   default:
  //     return 'Lighthouse Labs';
  //     break;
  // }
  if (age < 13) return 'Elementary School';
  else if (age > 18) return 'Lighthouse Labs';
  else return 'Lighthouse Labs';
}



console.log(whichSchool(35));
console.log(whichSchool(8));
console.log(whichSchool(14));