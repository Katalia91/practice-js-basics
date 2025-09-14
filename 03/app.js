/* getSum */

const min = 1;
const max = 100;

const a = randomNumber(min, max);
const b = randomNumber(min, max);
const c = randomNumber(min, max);

console.log(a, b, c);

function getSum(x, y, z) {
  /* Czy warto się jakoś "ubezpieczyć" na wypadek, gdyby ktoś chciał podstawić np. jakieś słowo jako argument, czyli np. zamiast const c = randomNumber(min, max); byłoby const c = "słoik"? Dostaniemy wówczas informację w konsoli, że Podany argument NaN jest nieparzysty */
  const arr = [Number(x), Number(y), Number(z)];
  const sortedArray = arr.sort(function (a, b) {
    return a - b;
  });
  sortedArray.shift();
  const sumOfGreatestNumbers = sortedArray.reduce(calculateSum);
  function calculateSum(acc, currentVal) {
    const sum = acc + currentVal;
    return sum;
  }
  return sumOfGreatestNumbers;
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

/* isEven */
const isEven = function (num) {
  if (typeof num !== "number") {
    return null;
  } else if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

/* showInfo */
function showInfo(value1, value2) {
  switch (value2) {
    case null:
      console.log(`Podany argument ${value1} nie jest liczbą`);
      break;
    case true:
      console.log(`Podany argument ${value1} jest parzysty`);
      break;
    case false:
      console.log(`Podany argument ${value1} jest nieparzysty`);
      break;
  }
}

/* wykorzystanie funkcji */
const sum = getSum(a, b, c);
const even = isEven(sum);
showInfo(sum, even);
