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

    expect(screen.getByRole("button")).toHaveClass('btn-category-medium');
    expect(screen.getByTestId('empty-face')).toBeInTheDocument();
    expect(screen.getByTestId('empty-face')).not.toHaveClass('color-face');
    expect(screen.getByRole("button")).not.toBeDisabled();
})

test('Render button with small size', () => {
    render(<CategoryButton size="small"/>)

    expect(screen.getByRole("button")).toHaveClass('btn-category-small');
})

test('Render button with medium size', () => {
    render(<CategoryButton size="medium"/>)

    expect(screen.getByRole("button")).toHaveClass('btn-category-medium');
})

test('Render button with big size', () => {
    render(<CategoryButton size="big"/>)

    expect(screen.getByRole("button")).toHaveClass('btn-category-big');
})

test('Render button with wrong size', () => {
    render(<CategoryButton size="bg"/>)

    expect(screen.getByRole("button")).toHaveClass('btn-category-medium');
})

test('Render button with color setting', () => {
    render(<CategoryButton isInColor={true} />)

    expect(screen.getByTestId('empty-face')).toHaveClass('color-face');
})

test('Render button with disable setting', () => {
    render(<CategoryButton isDisable={true} />)

    expect(screen.getByTestId('empty-face')).not.toHaveClass('hover-face');
    expect(screen.getByRole("button")).toBeDisabled();
})

test('Render button with wrong category name', () => {
    render(<CategoryButton category='cat' />)

    expect(screen.getByTestId('empty-face')).toBeInTheDocument();
})

test('Render button with noCategory setting', () => {
    render(<CategoryButton category='noCategory' />)

    expect(screen.getByTestId('empty-face')).toBeInTheDocument();
})

test('Render button with unknow setting', () => {
    render(<CategoryButton category='unknow' />)

    expect(screen.getByTestId('unhappy-face')).toBeInTheDocument();
})

test('Render button with learning setting', () => {
    render(<CategoryButton category='learning' />)

    expect(screen.getByTestId('neutral-face')).toBeInTheDocument();
})

test('Render button with knowing setting', () => {
    render(<CategoryButton category='knowing' />)

    expect(screen.getByTestId('smile-face')).toBeInTheDocument();
})

test('Render button with perfect setting', () => {
    render(<CategoryButton category='perfect' />)

    expect(screen.getByTestId('happy-face')).toBeInTheDocument();
})