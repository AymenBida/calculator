import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const n1 = new Big(numberOne);
  const n2 = new Big(numberTwo);

  if (operation === '+') {
    return n1.plus(n2).toString();
  }

  if (operation === '-') {
    return n1.minus(n2).toString();
  }

  if (operation === 'x') {
    return n1.times(n2).toString();
  }

  if (operation === '÷') {
    if (n2.c.length === 1 && n2.c[0] === 0) {
      return '0';
    }

    return n1.div(n2).toString();
  }

  if (operation === '%') {
    return n1.div(new Big(100)).toString();
  }

  return n2.toString();
};

export default operate;
