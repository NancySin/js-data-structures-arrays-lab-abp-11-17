// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  drivers.push('Ralph');
  console.log(drivers)
}
function destructivelyPrependDriver() {
  drivers.unshift("Bob");
  console.log(drivers)
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  console.log(drivers)
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  console.log(drivers)
}

function appendDriver(name) {
  var newDrivers = [...drivers, "Broom"];
   return(newDrivers)
  console.log(drivers)
}

function perpendDriver(name){
  const driversUpdate = ["Arnold",...driivers];
  return driversUpdate
}
