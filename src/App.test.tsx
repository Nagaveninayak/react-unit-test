import React from 'react';
import { render, screen } from '@testing-library/react'; // import for rendering virtually the dom
import App from './App';

/**test and expect is provided by react. Globally declared using jest */
/** screen is a object which takes getByText method to check if the text is present or not  */
test('renders learn react link', () => {
  render(<App />); //renders the app
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
