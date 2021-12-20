import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

test('display header', () => {
  render(<Header />);

  expect(screen.getByTestId('header-title')).toBeInTheDocument();
})
