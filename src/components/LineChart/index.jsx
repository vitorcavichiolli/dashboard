import './styles.css';
import { Chart } from "react-google-charts";
import { useCallback, useEffect, useState } from 'react';
import { ChartTitle } from '../ChartTitle';


export const LineChart = ({ title }) => {

  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);


  const handleLoadData = useCallback(async () => {
    const data = [
      ["Mês", "ITUB4", "VALE3", "PETR4"],
      ["Jan", 22.03, 81.40, 28.02],
      ["Fev", 21.04, 82.30, 28.30],
      ["Mar", 21.58, 82.02, 28.14],
      ["Abr", 20.41, 82.17, 29.01],
      ["Mai", 19.03, 81.59, 29.39],
      ["Jun", 18.50, 81.45, 28.60],
      ["Jul", 20.01, 82.30, 29.56],
      ["Ago", 20.70, 82.70, 30.50],
      ["Set", 21.30, 83.20, 30.67],
      ["Out", 22.56, 83.10, 30.83],
      ["Nov", 22.32, 83.60, 31.09],
      ["Dez", 23.60, 84.02, 31.45]
    ];

    const options = {
      backgroundColor: 'transparent',
      legend: { textStyle: { color: 'white' } },
      colors: ['#55E6C1', '#74b9ff', '#FC427B'],
      lineWidth: 7,
      hAxis: {
        title: "Data",
        textStyle: { color: 'white' },
        titleTextStyle: { color: "white" },
      },
      vAxis: {
        title: "Valor BRL",
        textStyle: { color: 'white' },
        titleTextStyle: { color: "white" },
      }
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
        chartType="LineChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );

}