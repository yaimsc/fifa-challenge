import { render, screen } from '@testing-library/react';
import React from 'react';
import BasicButton from './BasicButton';

test('BasicButton renders correctly', () => {

  render(<BasicButton />);

  expect(screen.getByTestId('button')).toBeInTheDocument();
})