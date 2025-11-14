import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

test('renders Progress Bar with 70%', () => {
  render(
    <ProgressBar 
        currentStep={7}
        steps={10}
    />
  );
  const percent = screen.getByText(/70%/);
  expect(percent).toBeInTheDocument();

  const steps = screen.getByText(/Tu as fais 7 cartes sur 10 dans ta catégorie./);
  expect(steps).toBeInTheDocument();
});