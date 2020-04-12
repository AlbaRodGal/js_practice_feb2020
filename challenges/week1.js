function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0) + '.' + lastName.charAt(0)
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round(originalPrice * (1 + (vatRate / 100)) * 100) / 100
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round((originalPrice - (originalPrice * (reduction / 100))) * 100) / 100
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if(str.length % 2 === 0 ){
    return str.charAt((str.length / 2) -1) + str.charAt(str.length / 2)
  } else {
    return str.charAt(str.length / 2)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split('').reverse('').join('')
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.map(reverseWord)
}
  
function countLinuxUsers(users) {
  let counter = 0;
  if (users === undefined) throw new Error("users is required");
  users.forEach(user => user.type === 'Linux'? counter++:"");
  return counter
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let total = 0
  scores.forEach(score => total += score)
  return Math.round(total / scores.length * 100) / 100
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 === 0 && n % 5 === 0){
    return 'fizzbuzz'
  } else if (n % 5 === 0){
    return 'buzz'
  } else if (n % 3 && n % 5 !== 0){
    return n
  } else if (n % 3 === 0){
    return 'fizz'
  }
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
