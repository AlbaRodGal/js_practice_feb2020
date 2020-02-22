function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === 'Manchester') {
    return true
  }
  return false
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const peopleInBus = 40
  const busesNeeded = Math.ceil(people / peopleInBus)
  return busesNeeded  
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
