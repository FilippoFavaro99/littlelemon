import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './BookingPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
})
