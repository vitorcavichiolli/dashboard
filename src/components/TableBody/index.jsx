import { Td } from '../Td';
import './styles.css'
import { Component } from 'react/cjs/react.production.min';

export class TableBody extends Component {
  render() {
    const { data } = this.props;
    return (
      <tbody className="table-body">
        {data.map(d => (
          <tr key={d.symbol}>
            <Td key={"symbol-" + d.symbol} text={d.symbol} />
            <Td key={"name-" + d.symbol} text={d.name} />
            <Td key={"prize-" + d.symbol} text={d.prize} />
            <Td key={"oscillation-" + d.symbol} text={d.oscillation} />
            <Td key={"volume-" + d.symbol} text={d.volume} />
          </tr>
        ))}

      </tbody>
    );
  }
};