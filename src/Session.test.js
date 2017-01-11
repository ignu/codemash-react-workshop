import React from 'react';
import Session from './Session';
import renderer from 'react-test-renderer'

it('renders without crashing', () => {

const session = {
  title: "React Everywhere",
  abstract: "blah",
  speakers: [{
    firstName: "Len"
  }]
}

  const output = renderer.create(<Session {...session} />);

  expect(output).toMatchSnapshot()
});
