import { render, screen } from '@testing-library/react';
import { Th } from '.';


describe('<Th/>', () => {
  it('should render table head text', () => {
    render(<Th text="Text" />);
    const th = screen.getByRole('columnheader', { text: /Text/i });
    expect(th).toBeInTheDocument();
  });

});