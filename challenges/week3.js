function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const square = nums.map(function (num) {
    return num * num
  })
  return square
}

function camelCaseWords(words) { //"my", "variable"
  if (words === undefined) throw new Error("words is required");
  let newArray = []
  for (let i = 1; i < words.length; i++) {
    const UpperCasedInitials = words[i].charAt(0).toUpperCase()
    const remaining = words[i].slice(1)
    newArray.push(UpperCasedInitials, remaining)
  }
  const firstWord = words[0].slice(0)
  return firstWord + newArray.join("")
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    const total = people[i]['subjects'].length
    sum = sum + total;
  } return sum
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    for (ing in menu) {
      if (menu[i]['ingredients'].includes(ingredient)) {
        return true
      }
    }
  } return false
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
