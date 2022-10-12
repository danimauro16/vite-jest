import { render, screen } from '@testing-library/react';
import { Home } from ".";

test('should render home component correctly', () => {
  render(<Home />);
  expect(screen.getByText(/Hi i am hom/i)).toBeInTheDocument();
});