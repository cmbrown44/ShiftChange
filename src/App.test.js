import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blog title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Shift Change/i);
  expect(titleElement).toBeInTheDocument();
});