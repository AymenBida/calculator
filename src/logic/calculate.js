import operate from './operate';

export default function calculate(calculator = {}, buttonName) {
  const { total, next, operation } = calculator;

  if (buttonName === operation) {
    return { total: operate(total, next, operation), next: null, operation: null };
  }

  if (buttonName === 'AC') {
    return { total: '0', next: null, operation: null };
  }

  if (buttonName === '+/-') {
    return { total: total * -1, next: next * -1, operation: null };
  }

  if (buttonName === '=') {
    return { total, next: null, operation: null };
  }

  return calculator;
}
