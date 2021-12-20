import { render, screen } from '@testing-library/react';
import React from 'react';
import Error from './Error'


test('render error texts correctly', () => {

  render(<Error />);

  expect(screen.getByTestId('error-text')).toBeInTheDocument();
})