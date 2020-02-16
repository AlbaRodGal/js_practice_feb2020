function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const capFirstLetter = word.charAt(0).toUpperCase()
  const remaining = word.slice(1)
  return capFirstLetter + remaining
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  const initialFirstName = firstName.charAt(0)
  const initialLastName = lastName.charAt(0)
  const initials = initialFirstName + '.' + initialLastName
  return initials
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  const totalPrice = originalPrice * (1 + (vatRate / 100))
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100
  return roundedTotalPrice
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  const discount = originalPrice * (reduction / 100)
  const salePrice = originalPrice - discount
  const roundedSalePrice = Math.round(salePrice * 100) / 100
  return roundedSalePrice
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
