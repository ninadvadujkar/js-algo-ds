const countUniqueValues = (sortedArray) => {
  if (sortedArray.length === 0) {
    return 0;
  }
  let prev = sortedArray[0];
  let count = 1;
  for (let i = 1; i < sortedArray.length; i++) {
    if (prev !== sortedArray[i]) {
      count++;
    }
    prev = sortedArray[i];
  }
  return count;
};

const ret = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
console.log(ret);
