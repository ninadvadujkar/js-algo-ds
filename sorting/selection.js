const swap = require('./swap');

const selectionSort = (array) => {
  const a = array.slice(0);
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[min] > a[j]) {
        min = j;
      }
    }
    swap(a, i, min);
    console.log('OUTER.....', a);
  }
};

const ret = selectionSort([34, 22, 10, 19, 17]);
console.log(ret);
