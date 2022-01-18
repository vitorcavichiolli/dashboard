import { render, screen } from '@testing-library/react';
import { Td } from '.';


describe('<Th/>', () => {
  it('should render table cell text', () => {
    render(<Td text="Text" />);
    const td = screen.getByRole('cell', { text: /Text/i });
    expect(td).toBeInTheDocument();
  });

});