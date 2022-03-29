const swap = require('./swap');

const bubbleSort = (array) => {
  const a = array.slice(0);
  for (let i = a.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(a, a[j], a[j+1]);
      if (a[j] > a[j+1]) {
        swap(a, j, j+1);
      }
    }
    console.log('ONE PASS COMPLETE');
    console.log('==================');
  }
  return a;
};

const bubbleSortOptimized = (array) => {
  let noSwaps = false;
  const a = array.slice(0);
  for (let i = a.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(a, a[j], a[j+1]);
      if (a[j] > a[j+1]) {
        swap(a, j, j+1);
        noSwaps = false;
      }
    }
    console.log('ONE PASS COMPLETE');
    console.log('==================');
    if (noSwaps) break;
  }
  return a;
};

const ret1 = bubbleSort([45, 23, 67, 22, 56, 8]);
console.log(ret1);

console.log('\n >>>>>>>>>>>>>> Optimized bubble sort with `noSwaps` >>>>>>>>>>>>>> \n');

const ret2 = bubbleSortOptimized([67, 8, 22, 23, 45, 56]);
console.log(ret2);
