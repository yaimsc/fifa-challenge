import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Header from './Header';

test('display header', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByTestId('header-title')).toBeInTheDocument();
})
