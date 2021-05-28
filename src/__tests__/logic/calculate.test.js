import calculate from '../../logic/calculate';

const withoutNext = { total: '26', next: null, operation: '+' };
const positivesAndNegative = { total: '26', next: '-25', operation: '+' };
const positivesAndOperation = { total: '51651', next: '16511', operation: '+' };

describe('When buttonName is "AC"', () => {
  it('it resets the calculator', () => {
    expect(calculate(positivesAndOperation, 'AC')).toEqual({ total: '0', next: null, operation: null });
  });
});

describe('When buttonName is "+/-"', () => {
  const negativesAndOperation = { total: '-663', next: '-523', operation: '+' };

  it('it makes "total" and "next" negative if they are positive', () => {
    expect(calculate(positivesAndOperation, '+/-')).toEqual({ total: '-51651', next: '-16511', operation: '+' });
  });

  it('it makes "total" and "next" positive if they are negative', () => {
    expect(calculate(negativesAndOperation, '+/-')).toEqual({ total: '663', next: '523', operation: '+' });
  });

  it('it handles them individually so negative becomes positive and positive becomes negative', () => {
    expect(calculate(positivesAndNegative, '+/-')).toEqual({ total: '-26', next: '25', operation: '+' });
  });

  it('it works if "next" is null (it ignores it)', () => {
    expect(calculate(withoutNext, '+/-')).toEqual({ total: '-26', next: null, operation: '+' });
  });
});

describe('When buttonName is "%"', () => {
  it('it updates "total" to the percentage value of itself when "next" is null', () => {
    expect(calculate(withoutNext, '%')).toEqual({ total: '0.26', next: null, operation: '+' });
  });

  it('it updates "next" to the percentage value of itself when "next" is provided', () => {
    expect(calculate(positivesAndOperation, '%')).toEqual({ total: '51651', next: '165.11', operation: '+' });
  });
});

describe('When operation is null', () => {
  const withoutOperation = { total: '35', next: null, operation: null };

  describe('When buttonName is a number', () => {
    it('it appends the number clicked to the number in "total"', () => {
      expect(calculate(withoutOperation, '6')).toEqual({ total: '356', next: null, operation: null });
    });
  });

  describe('When number has a dot and buttonName is a dot', () => {
    const withDotted = { total: '35.25', next: null, operation: null };

    it('it does not add a dot if the number is already dotted', () => {
      expect(calculate(withDotted, '.')).toEqual({ total: '35.25', next: null, operation: null });
    });
  });

  describe('When buttonName is an operation (+, -, x, ÷)', () => {
    it('it updates "operation" to the value in buttonName', () => {
      expect(calculate(withoutOperation, '+')).toEqual({ total: '35', next: null, operation: '+' });
    });
  });
});

describe('When operation is provided', () => {
  describe('When buttonName is a number', () => {
    it('it appends the number clicked to the number in "next"', () => {
      expect(calculate(withoutNext, '6')).toEqual({ total: '26', next: '6', operation: '+' });
    });
  });

  describe('When there are numbers in "total" and "next"', () => {
    it('it does the operation and store the result in "total" and make "next" null', () => {
      expect(calculate(positivesAndNegative, '+')).toEqual({ total: '1', next: null, operation: '+' });
    });
  });
});
