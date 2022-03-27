// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  return base * power(base, exponent - 1);
};

const ret = power(2, 1);
console.log(ret);
