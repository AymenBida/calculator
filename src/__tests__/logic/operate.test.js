import operate from '../../logic/operate';

describe('When button is "+"', () => {
  it('adds the two numbers provided as arguments', () => {
    expect(operate('13', '6', '+')).toEqual('19');
  });
});

describe('When button is "-"', () => {
  it('substracts the second number from the first', () => {
    expect(operate('13', '6', '-')).toEqual('7');
  });
});

describe('When button is "x"', () => {
  it('multiplies the two numbers', () => {
    expect(operate('13', '6', 'x')).toEqual('78');
  });
});

describe('When button is "÷"', () => {
  it('divide the first number by the second one', () => {
    expect(operate('14', '7', '÷')).toEqual('2');
  });
});

describe('When button is "%"', () => {
  it('returns the percentage value of the first number', () => {
    expect(operate('14', '7', '%')).toEqual('0.14');
  });
});
