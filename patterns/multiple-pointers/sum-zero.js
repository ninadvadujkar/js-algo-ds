const sumZero = (sortedArray) => {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];
    if (sum === 0) {
      return [sortedArray[left], sortedArray[right]];
    }
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
};


// sorted array as input, find the pair of numbers that add up to 0
const ret = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
console.log(ret);