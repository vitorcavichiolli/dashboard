import { render, screen } from '@testing-library/react';
import { ChartTitle } from '.';


describe('<ChartTitle/>', () => {
  it('should render title text', () => {
    render(<ChartTitle text="Text" />);
    const h2 = screen.getByRole('heading', { text: /Text/i });
    expect(h2).toBeInTheDocument();
  });

});