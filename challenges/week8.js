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
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
