// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

const fib = (num) => {
  if (num <= 1) return num;
  return fib(num - 1) + fib(num - 2);
};


const ret = fib(4);
console.log(ret);
