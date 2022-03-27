// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

const recursiveRange = (num) => {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
};

const ret = recursiveRange(6);
console.log(ret);