import './styles.css'
import { PieChart } from '../PieChart';
import { LineChart } from '../LineChart';


export const ChartsBox = () => {
  return (
    <>
      <div className="charts-box">
        <PieChart title="Portifólio de ações" />
        <LineChart title="Evolução de rendimentos" />
      </div>

    </>
  );

};