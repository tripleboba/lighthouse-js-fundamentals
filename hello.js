const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

const sayBye = name => {
  return 'Bye, ' + name;
}
console.log(sayBye("Caliban"));
console.log(sayBye("Miranda"));
console.log(sayBye("Ferdinand"));
