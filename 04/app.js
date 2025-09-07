/* 1. Napisz funkcję, która utworzy i zwróci tablicę z 20 elementami wylosowanymi z podanego zakresu. */

function randomNumber(minNum, maxNum) {
  const randomNum = Math.round(Math.random() * (maxNum - minNum) + minNum);
  return randomNum; // zwracamy jakiś random number zaokrąglony do najbliższej liczby całkowitej
}

function createArray(min, max) {
  const arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(randomNumber(min, max));
  }
  return arr;
}

const newArr = createArray(1, 10);

/* 2. Napisz kolejną funkcję, która posortuje liczby z otrzymanej powyżej tablicy od wartości największej do najmniejszej i zwróci tablicę zawierającą tylko 10 największych liczb. W ciele funkcji możesz użyć metod .sort() oraz .slice(). */

function getLargestNumbers(arr) {
  const sortedArray = arr.slice().sort(function (a, b) {
    return b - a;
  });
  const largestNumbers = sortedArray.slice(0, 10);
  return largestNumbers;
}

const largest = getLargestNumbers(newArr);

/* 3. Ostatnia funkcja ma obliczać średnią arytmetyczną z liczb przechowyanych w przekazanej przez parametr tablicy. Możesz do tego wykorzystać .forEach() lub .reduce(). */

function calcAverage(arr) {
  const initialVal = 0;
  const numOfElements = arr.length;
  const sum = arr.reduce(function (acc, currentVal) {
    return acc + currentVal;
  }, initialVal);
  const avg = sum / numOfElements;
  return avg;
}
const calculatedAvg = calcAverage(newArr);

/* 4. Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych ich średnią arytmetyczną. */
const finalArr = createArray(10, 200);
function calculateFinalAverage(arr) {
  const largestValues = getLargestNumbers(arr);
  const finalAvg = calcAverage(largestValues);
  return finalAvg;
}
const finalResult = calculateFinalAverage(finalArr);
console.log(finalResult);
