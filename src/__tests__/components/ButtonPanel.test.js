import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

const handleClick = jest.fn();

it('renders correctly', () => {
  const tree = renderer.create(<ButtonPanel clickHandler={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
