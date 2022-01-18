import { Component } from 'react/cjs/react.production.min';
import { TableBody } from '../TableBody';
import { TableHead } from '../TableHead';
import './styles.css'

export class Table extends Component {
  render() {
    const { data, handleClick } = this.props;
    return (
      <table className="portfolio-table" onClick={handleClick} >
        <TableHead />
        <TableBody data={data} />
      </table>
    );
  }
};