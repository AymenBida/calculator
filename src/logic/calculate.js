import operate from './operate';

const prepareNumber = (initial, next) => {
  if (initial === '0' || initial === null) {
    if (next === '.') return '0.';

    return next;
  }

  if (initial.includes('.') && next === '.') {
    return initial;
  }

  return initial + next;
};

export default function calculate(calculator = {}, buttonName) {
  const { total, next, operation } = calculator;

  if (buttonName === 'AC') {
    return { total: '0', next: null, operation: null };
  }

  if (buttonName === '+/-') {
    return {
      total: (total * -1).toString(),
      next: next ? (next * -1).toString() : null,
      operation,
    };
  }

  if (buttonName === '%') {
    return {
      total: next ? total : operate(total, total, buttonName),
      next: next ? operate(next, next, buttonName) : next,
      operation,
    };
  }

  if (operation === null) {
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(buttonName)) {
      return { total: prepareNumber(total, buttonName), next: null, operation: null };
    }

    if (['+', '-', 'x', '÷'].includes(buttonName)) {
      return { total, next: null, operation: buttonName };
    }
  } else {
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(buttonName)) {
      return { total, next: prepareNumber(next, buttonName), operation };
    }

    if (['+', '-', 'x', '÷', '='].includes(buttonName)) {
      if (total && next) {
        return { total: operate(total, next, operation), next: null, operation: buttonName };
      }
      return { total, next: null, operation: buttonName };
    }
  }

  return calculator;
}
