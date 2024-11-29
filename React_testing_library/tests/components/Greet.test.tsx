import { render, screen } from '@testing-library/react'
import Greet from '../../src/components/Greet';  // Fixed path formatting

describe('Greet', () => {
  it('should render Hello with the name when name is provided', () => {
    render(<Greet name="Mosh" />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });
});
