import { render, screen, fireEvent } from '@testing-library/react';
import CategoryButton from './CategoryButton';

test('Trigger the bind action button', () => {
  const mockAction = jest.fn();
  render(<CategoryButton action={mockAction}/>)

  fireEvent.click(screen.getByRole('button'))

  expect(mockAction).toHaveBeenCalledTimes(1)
})

test('Render button with default settings', () => {
    render(<CategoryButton />)

    expect(screen.getByRole("button")).toHaveClass('btn-category btn-category-medium');
    expect(screen.getByTestId('face-empty')).toBeInTheDocument();
    expect(screen.getByTestId('face-empty')).not.toHaveClass('color-face');
    expect(screen.getByRole("button")).not.toBeDisabled();
})

test('Render button with color setting', () => {
    render(<CategoryButton color={true} />)

    expect(screen.getByTestId('face-empty')).toHaveClass('color-face');
})

test('Render button with disable setting', () => {
    render(<CategoryButton disable={true} />)

    expect(screen.getByTestId('face-empty')).not.toHaveClass('hover-face');
    expect(screen.getByRole("button")).toBeDisabled();
})

test('Render button with wrong category name', () => {
    render(<CategoryButton category='cat' />)

    expect(screen.getByTestId('face-empty')).toBeInTheDocument();
})

test('Render button with noCategory setting', () => {
    render(<CategoryButton category='noCategory' />)

    expect(screen.getByTestId('face-empty')).toBeInTheDocument();
})

test('Render button with unknow setting', () => {
    render(<CategoryButton category='unknow' />)

    expect(screen.getByTestId('face-unhappy')).toBeInTheDocument();
})

test('Render button with learning setting', () => {
    render(<CategoryButton category='learning' />)

    expect(screen.getByTestId('face-neutral')).toBeInTheDocument();
})

test('Render button with knowing setting', () => {
    render(<CategoryButton category='knowing' />)

    expect(screen.getByTestId('face-smile')).toBeInTheDocument();
})

test('Render button with perfect setting', () => {
    render(<CategoryButton category='perfect' />)

    expect(screen.getByTestId('face-happy')).toBeInTheDocument();
})