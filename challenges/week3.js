function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(function (num) {
    return num * num
  })
}

function camelCaseWords(words) { //"my", "variable"
  if (words === undefined) throw new Error("words is required");
  let newArray = []
  for (let i = 1; i < words.length; i++) {
    newArray.push(words[i].charAt(0).toUpperCase(), words[i].slice(1))
  }
  return words[0].slice(0) + newArray.join("")
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let sum = 0;
  people.forEach(person => sum += person['subjects'].length)
  return sum
}

//
function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++) {
    if (menu[i]['ingredients'].includes(ingredient)) {
      return true
    }
  }; 
  return false
}

//forEach looks cleaner
function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let newArr = []
  arr1.forEach(function(num){
    arr2.forEach(function(num2){
      if(num === num2 && !newArr.includes(num)){
        newArr.push(num)
      }
    })
  });
  return newArr.sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
