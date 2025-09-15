/* rozwiązanie z pętlą for */
// const x = 4;
function multiplyNumber() {
  const x = prompt("Tabliczka mnożenia: wybierz liczbę");

  if (x >= 1 && x <= 9) {
    for (let i = 1; i <= 9; i++) {
      const multiplyResult = i * x;
      console.log(`Wynik mnożenia: ${x} x ${i} = ${multiplyResult}`);
    }
  } else {
    console.log(`Wybierz liczbę z przedziału 1 do 9`);
  }
}
multiplyNumber();

/* rozwiązanie z pętlą while  */

const userDataNumber = getUserInput();
const userDataPower = getUserInput();

console.log("Pętla while, rozwiązanie pierwsze:");
function exponentiateNumber(a, n) {
  let str = "";
  let counter = 0;
  let poweredResult = 1;
  while (counter !== n) {
    poweredResult = poweredResult * a;
    counter = counter + 1;
    if (counter === n) {
      str = str + a;
    } else {
      str = `${str}${a} * `;
    }
  }
  console.log(`${str} = ${poweredResult}`);
}
exponentiateNumber(userDataNumber, userDataPower);

/* Pobierane danych od użytkownika */
function getUserInput() {
  const userData = prompt(
    "Wybierz liczbę, którą chcesz spotęgować, a następnie wybierz potęgę."
  );
  return Number(userData);
}

/* rozwiązanie z pętlą while i prompt()- postanowiłam połączyć oba rozwiązania */

// console.log("Pętla while, rozwiązanie drugie:");
// function calculatePower(number, power) {
//   const power = 4;
//   const number = 3;

//   let str = "";
//   let counter = 0;
//   let poweredResult = 1;
//   while (counter !== power) {
//     poweredResult = poweredResult * number;
//     counter = counter + 1;
//     if (counter === power) {
//       str = str + number;
//     } else {
//       str = `${str}${number} * `;
//     }
//   }
//   console.log(`${str} = ${poweredResult}`);
// }
// calculatePower(n, p);
