import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('render with his child', () => {
  render(
    <Button>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByTestId("test-children")).toBeInTheDocument();
});

test('render with default settings', () => {
  render(
    <Button>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('medium-btn default-btn');
});

test('render with wrong color prop', () => {
  render(
    <Button color='red'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('default-btn');
});

test('render with primary color prop', () => {
  render(
    <Button color='primary'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('primary-btn');
});

test('render with default color prop', () => {
  render(
    <Button color='default'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('default-btn');
});

test('render with secondary color prop', () => {
  render(
    <Button color='secondary'>
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('secondary-btn');
});

test('render medium size when wrong size prop', () => {
  render(
    <Button size="m">
        <p data-testid="test-children">Coucou</p>
    </Button>
  );
  
  expect(screen.getByRole("button")).toHaveClass('medium-btn');
});

test('render with big size', () => {
  render(
    <Button size="big">
        <p data-testid="test-children">Coucou</p>
    </Button>
  );

  expect(screen.getByRole("button")).toHaveClass('big-btn');
});

test('render with medium size', () => {
  render(
    <Button size="medium">
        <p data-testid="test-children">Coucou</p>
    </Button>
  );

  expect(screen.getByRole("button")).toHaveClass('medium-btn');
});

test('render with small size', () => {
  render(
    <Button size="small">
        <p data-testid="test-children">Coucou</p>
    </Button>
  );

  expect(screen.getByRole("button")).toHaveClass('small-btn');
});

test('render a disable button', () => {
  render(
    <Button isDisable={true}>
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
    <Button isDisable={false}>
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