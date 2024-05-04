const numberOne = Number(prompt("Digite o primeiro número:"));
const numberTwo = Number(prompt("Digite o segundo número:"));

const sum = numberOne + numberTwo;
const subtraction = numberOne - numberTwo;
const multiplication = numberOne * numberTwo;
const division = (numberOne / numberTwo).toFixed(2);
const rest = (numberOne % numberTwo).toFixed(2);

const parOrimpar = (number) => {
  if (number % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
};

const sameNumber = (numberOne, numberTwo) => {
  if (numberOne === numberTwo) {
    return "Os números inseridos são iguais";
  } else {
    return "Os números inseridos são diferentes";
  }
};

const numberOneParOrImpar = parOrimpar(sum);
const numberSame = sameNumber(numberOne, numberTwo);
alert(
  `Soma: ${sum}\nSubtração: ${subtraction}\nMultiplicação: ${multiplication}\nDivisão: ${division}\nResto da divisão: ${rest}`
);
alert(`A soma dos dois números é ${numberOneParOrImpar}`);
alert(numberSame);
