import { render, screen } from '@testing-library/react';
import React from 'react';
import SelectTeamPlayers from './SelectTeamPlayers';

test('display selects', () => {
  render(<SelectTeamPlayers />);

  expect(screen.getByTestId('selects')).toBeInTheDocument();
})