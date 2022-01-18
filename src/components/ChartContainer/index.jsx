import { useCallback, useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import './styles.css'

export const ChartContainer = ({ data, chartType }) => {

  const [options, setOptions] = useState([]);

  const handleLoadData = useCallback(async () => {

    const options = {
      backgroundColor: 'transparent',
      legend: { textStyle: { color: 'white' } },
      colors: ['#fbc531'],
      lineWidth: 7,
      hAxis: {
        title: "Data",
        textStyle: { color: 'white' },
        titleTextStyle: { color: "white" },
      },
      vAxis: {
        title: "Valor BRL",
        titleTextStyle: { color: "white" },
        textStyle: { color: 'white' },
      }
    }

    setOptions(options);
  }, []);

  useEffect(() => {
    handleLoadData();
  }, [handleLoadData]);
  return (
    <div className='chart-container'>
      <Chart
        chartType={chartType}
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );

};