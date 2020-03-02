function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  const square = nums.map(function (num) {
    return num * num
  })
  return square
}

function camelCaseWords(words) { //"my", "variable"
  if (words === undefined) throw new Error("words is required");

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
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
