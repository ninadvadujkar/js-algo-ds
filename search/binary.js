const binarySearch = (array, termToSearch) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.round((left + right) / 2);
    const arrayItemToCheck = array[middle];
    if (arrayItemToCheck === termToSearch) {
      return middle;
    }
    if (termToSearch < arrayItemToCheck) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

const ret = binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95);
console.log(ret);
