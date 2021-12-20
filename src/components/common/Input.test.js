import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from './Input';

test('render Inputs correclty', () => {
  render(<Input />);

  expect(screen.getByTestId('input')).toBeInTheDocument();
})