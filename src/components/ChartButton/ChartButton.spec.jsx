import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ChartButton } from '.';
import { faChartLine } from "@fortawesome/free-solid-svg-icons";


describe('<ChartButton/>', () => {
  it('should render the button with icon', () => {
    render(<ChartButton icon={faChartLine} />);
    expect.assertions(1);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<ChartButton icon={faChartLine} handleClick={fn} />);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(fn).toHaveBeenCalled();

  });

});