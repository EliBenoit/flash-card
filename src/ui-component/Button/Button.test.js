import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders with his child', () => {
  render(
    <Button>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByTestId("test-children")).toBeInTheDocument();
});

test('renders with default settings', () => {
  render(
    <Button>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('btn-medium default-btn');
});

test('renders with wrong color prop', () => {
  render(
    <Button color='red'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('default-btn');
});

test('renders with primary color prop', () => {
  render(
    <Button color='primary'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('primary-btn');
});

test('renders with default color prop', () => {
  render(
    <Button color='default'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('default-btn');
});

test('renders with secondary color prop', () => {
  render(
    <Button color='secondary'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('secondary-btn');
});

test('renders medium size when wrong size prop', () => {
  render(
    <Button size="m">
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('btn-medium');
});

test('renders with big size', () => {
  render(
    <Button size="big">
        <p data-testid="test-children">Coucou</p>
    </Button>
  );

  expect(screen.getByRole("button")).toHaveClass('btn-big');
});

test('render a disable button', () => {
  render(
    <Button disable={true}>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );

  expect(screen.getByRole("button")).toBeDisabled();
});

test('render a not disabled button', () => {
  render(
    <Button>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );

  expect(screen.getByRole("button")).not.toBeDisabled();
});

test('render a not disabled button by default', () => {
  render(
    <Button disable={false}>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );

  expect(screen.getByRole("button")).not.toBeDisabled();
});

test('trigger the bind action button', () => {
  const mockAction = jest.fn();
  render(<Button action={mockAction}/>)

  fireEvent.click(screen.getByRole('button'))

  expect(mockAction).toHaveBeenCalledTimes(1)
})