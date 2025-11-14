import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card with children', () => {
  render(
    <Card>
        <p data-testid="test-children">Coucou</p>
    </Card>
  );
  const children = screen.getByTestId("test-children");
  expect(children).toBeInTheDocument();
});