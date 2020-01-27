import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom';
expect.extend({toBeInTheDocument, toHaveClass})
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  rtl.render(<App />, div);
});

// First unit test: classname test
// test("It has a classname toggle - container", () => {
//   const{ getByTestId } = rtl.render(<App />);
//   expect(getByTestId("toggle")).toBeInTheDocument();
//   expect(getByTestId("toggle")).toHaveClass("App");
// });

// Second test: snapshot test to ensure our UI doesn't change without the team knowing about it. 
test("renders correctly when there are no players", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Third test: Integration test - tests interactiosn with the user
test("container players title", () => {
  // ARRANGE
  const expectedPlayersElements = 2;
  const { getAllByText } = rtl.render(<App />);

  // ACT
  const playersElements = getAllByText(/players/i);

  // ASSERT
  expect(playersElements.length).toBe(expectedPlayersElements);
});