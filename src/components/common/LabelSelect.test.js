import { render, screen } from '@testing-library/react';
import React from 'react';
import LabelSelect from './LabelSelect';

test('display select wrapper', () => {
  render(<LabelSelect />);

  expect(screen.getByTestId('select-wrapper')).toBeInTheDocument();
})