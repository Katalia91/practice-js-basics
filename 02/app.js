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
exponentiateNumber(3, 4);

/* rozwiązanie z pętlą while i prompt() */
console.log("Pętla while, rozwiązanie drugie:");
function calculatePower() {
  const power = 4;
  const number = prompt("Wybierz liczbę, którą chcesz spotęgować");
  let str = "";
  let counter = 0;
  let poweredResult = 1;
  while (counter !== power) {
    poweredResult = poweredResult * number;
    counter = counter + 1;
    if (counter === power) {
      str = str + number;
    } else {
      str = `${str}${number} * `;
    }
  }
  console.log(`${str} = ${poweredResult}`);
}
calculatePower();
