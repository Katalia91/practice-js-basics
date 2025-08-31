const a = "4.2";
const b = 9;

console.log(typeof a);
console.log(typeof b);

const numberA = Number(a);

function count(a, b) {
  const arr = [];
  const sum = a + b;
  const substr = a - b;
  const multiply = a * b;
  const division = a / b;
  arr.push(sum, substr, multiply, division);
  arr.forEach(function (result) {
    if (result > 20) {
      console.log(`The result is ${result}, and it's greater than 20`);
    } else if (result === 20) {
      console.log(`The result is exactly ${result}`);
    } else {
      console.log(`The result is ${result}, and it's smaller than 20`);
    }
  });
}

count(numberA, b);
count(10, 10);
count(10, -10);
