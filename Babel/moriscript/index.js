// const result = 1 + 2;

// console.log(123)

const a = 1, b = 2;

function add(foo, bar) {
  console.log(a, b)
  return () => {
    const a = '1';
    return a + (foo + bar)
  }
}
