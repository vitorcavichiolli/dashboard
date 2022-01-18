import './styles.css';
import { Chart } from "react-google-charts";
import { useCallback, useEffect, useState } from 'react';
import { ChartTitle } from '../ChartTitle';


export const PieChart = ({ title }) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  const handleLoadData = useCallback(async () => {

    const data = [
      ["Ação", "Valor $"],
      ["ITUB4", 7500],
      ["VALE3", 35000],
      ["PETR4", 12000],
    ];

    const options = {
      backgroundColor: 'transparent',
      legend: { textStyle: { color: 'white' } },
      colors: ['#55E6C1', '#74b9ff', '#FC427B'],
      is3D: true,
    }
    setData(data);
    setOptions(options);

  }, []);

  useEffect(() => {
    handleLoadData();
  }, [handleLoadData]);

  return (
    <div className="chart-card">
      <ChartTitle title={title} />
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  )
};
