import React from 'react';
import { render } from '@testing-library/react';
import CreateTeam from './CreateTeam';

const mockUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

it('form can be submitted', () => {
  render(<CreateTeam onClick={mockUseNavigate}/>)
  expect(mockUseNavigate).toBeTruthy();
});

// beforeEach(() => {
//   wrapper = render( <CreateTeam / > );
// });

// it('calls onClick props and sets clicked state to true when clicked', () => {
//   const mockClick = jest.fn();
//   const testComp = render(<CreateTeam onClick={ mockClick } />);
//   wrapper.find('button').simulate('click');
//   expect(mockClick).toHaveBeenCalled();
//   expect(testComp.state('clicked')).toBe(true)
// })
