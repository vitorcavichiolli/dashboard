import { Component } from 'react/cjs/react.production.min';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css'

export class ChartButton extends Component {
  render() {
    const { icon, handleClick } = this.props;
    return (
      <button className='chart-button' onClick={handleClick}>
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }
};