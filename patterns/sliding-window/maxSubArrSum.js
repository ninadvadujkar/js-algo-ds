const maxSubArrSum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    // add the current number and remove the first one from prev set
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};


const ret = maxSubArrSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(ret);