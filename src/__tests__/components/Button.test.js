import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/Button';

const handleClick = jest.fn();

it('renders correctly with the number "5"', () => {
  const tree = renderer.create(<Button name="5" clickHandler={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with the operator "+"', () => {
  const tree = renderer.create(<Button name="+" clickHandler={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with any string', () => {
  const tree = renderer.create(<Button name="aymen" clickHandler={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
