const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for (let i = 0; i < nums.length; i++) {
    if (n === nums[i]) {
      return nums[i + 1]
    } else if (n === nums[nums.length - 1]) {
      return null
    }
  }
  return null
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let counter = {
    0: 0,
    1: 0
  }

  const list = str.split('')

  list.forEach(element => element === '1' ? counter[1] = counter['1'] + 1 : counter[0] = counter['0'] + 1
  )
  return counter
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const str = n.toString()
  const list = str.split('');
  const reversedList = list.reverse().join('');
  const reversedNumbers = Number(reversedList)
  return reversedNumbers
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  const EachArraySum = arrs.map(element => element.reduce((a,b) => a + b))
  const sumResults = EachArraySum.reduce((a,b) => a + b)
  return sumResults
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");  
    if(arr.length >= 2){
      [arr[0], arr[arr.length -1]] = [arr[arr.length -1], arr[0]]
    } 
   return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const values = Object.values(haystack);
  const valuesLowCase = values.map(val => typeof val === 'string'? val.toLowerCase().split(' '): val)
  const searchTermLowCase = searchTerm.toLowerCase()
  for(let i = 0; i < valuesLowCase.length; i++){
    const value = valuesLowCase[i];
    for(let j = 0; j < value.length; j++){
      if(value[j].includes(searchTermLowCase)){
        return true
      }
    }
  } return false
}

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let obj = {}
  const removePunct = str.replace(/[,!.?"]/g,'')
  const list = removePunct.toLowerCase().split(' ');
  
  for(let i = 0; i < list.length ; i++){
    const word = list[i]
    obj[word] = ++obj[word] || 1
  }
  return obj
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
