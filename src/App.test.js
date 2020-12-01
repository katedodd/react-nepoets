import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*test('links redirect correctly', () => {
  //url when click home = * / home, etc.
});*/

/* test('ensure not IE', () => {
  //check browser
});*/


