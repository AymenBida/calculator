import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';

it('renders correctly with "0" per default', () => {
  const tree = renderer.create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with "result" if given', () => {
  const tree = renderer.create(<Display result="177" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a special class if the result is longer than 11 characters', () => {
  const tree = renderer.create(<Display result="17716251456985" />).toJSON();
  expect(tree).toMatchSnapshot();
});
