import React from 'react';
import Session from './Session';
import renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const output = renderer.create(<Session title="a" abstract="b" />);

  expect(output).toMatchSnapshot()
});
