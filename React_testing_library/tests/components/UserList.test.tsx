import { render, screen } from '@testing-library/react';
import UserList from '../../src/components/UserList';  

describe('UserList', () => {
  it('should render no users when the users array is empty', () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });
})
