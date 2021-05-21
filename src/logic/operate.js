import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const n1 = new Big(numberOne);
  const n2 = new Big(numberTwo);

  if (operation === '+') {
    return n1 + n2;
  }

  if (operation === '-') {
    return n1 - n2;
  }

  if (operation === 'x') {
    return n1 * n2;
  }

  if (operation === '÷') {
    return n1 / n2;
  }

  if (operation === '%') {
    return (n1 / 100) * n2;
  }

  return n2;
}
