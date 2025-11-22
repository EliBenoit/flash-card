import { render, screen } from '@testing-library/react';
import Overlay from './Overlay';

test('renders Overlay', () => {
  render(
    <Overlay>
        <p>test</p>
    </Overlay>
    )
  expect(screen.getByText(/test/)).toBeInTheDocument();
});