const swap = require('./swap');

const selectionSort = (array) => {
  const a = array.slice(0);
  for (let i = 0; i < a.length; i++) {
    let min = i;
    console.log('m...', min, a[min]);
    for (let j = i + 1; j < a.length; j++) {
      console.log(a[min], a[j]);
      if (a[min] > a[j]) {
        console.log('m...now', min, a[min]);
        swap(a, min, j);
        min = j;
      }
    }
    console.log('OUTER.....', a);
  }
};

const ret = selectionSort([5, 2, 10, 34, 8]);
console.log(ret);
