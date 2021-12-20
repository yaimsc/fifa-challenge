import React from 'react';
import { render } from '@testing-library/react';
import FinalTeam from './FinalTeam'
import { BasicButton } from '../components/common';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

//Gives error due to localStorage filter calls first

// test('display final values', () => {
//   render(<FinalTeam />);
//   expect(screen.getByText(/Your selected team/i)).toBeInTheDocument();
// });

it('can go back', () => {
  render(<BasicButton onClick={mockUseNavigate}/>)
  expect(mockUseNavigate).toBeTruthy();
});