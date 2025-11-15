import { render, screen } from '@testing-library/react';
import CardHeader from './CardHeader';

test('render CardHeader with the correct title', () => {
  render(
    <CardHeader title="Question" />
  );
  
  expect(screen.getByText(/Question/)).toBeInTheDocument();
});