import { useCallback, useEffect, useState } from 'react';
import { ChartButton } from '../ChartButton';
import { ChartContainer } from '../ChartContainer';
import { Table } from '../Table';
import { faChartLine, faChartBar, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import './styles.css'

export const TableCard = () => {

  const [data, setData] = useState([]);
  const [dataCharts, setDataCharts] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [chartType, setChartType] = useState("");

  const handleLoadData = useCallback(async () => {
    //const data = await loadPie();

    const data = [
      { 'symbol': 'PETR4', 'name': 'Petroleo Brasileiro SA Petrobras Preference Shares', 'prize': '31,50 BRL', 'oscillation': '0,15%', 'volume': 'R$ 1,12 bi' },
      { 'symbol': 'ITUB4', 'name': 'Itaú Unibanco', 'prize': '23,50 BRL', 'oscillation': '0,01%', 'volume': 'R$ 412,55 mi' },
      { 'symbol': 'VALE3', 'name': 'Vale ', 'prize': '84,49 BRL', 'oscillation': '-0,23%', 'volume': 'R$ 816,63 mi' },
    ]
    setData(data);

    const dataCharts = [
      //      ["Mês", "ITUB4", "VALE3", "PETR4"],
      { "month": "Jul", "symbol": "ITUB4", "prize": 20.01, "opening": 21.02, "closing": 20.01, "variation": 20.20 },
      { "month": "Ago", "symbol": "ITUB4", "prize": 20.70, "opening": 21.45, "closing": 20.70, "variation": 20.87 },
      { "month": "Set", "symbol": "ITUB4", "prize": 21.30, "opening": 21.57, "closing": 21.30, "variation": 21.34 },
      { "month": "Out", "symbol": "ITUB4", "prize": 22.56, "opening": 22.36, "closing": 22.56, "variation": 22.20 },
      { "month": "Nov", "symbol": "ITUB4", "prize": 22.32, "opening": 21.92, "closing": 22.32, "variation": 21.23 },
      { "month": "Dez", "symbol": "ITUB4", "prize": 23.60, "opening": 22.76, "closing": 23.60, "variation": 22.87 },
      { "month": "Jul", "symbol": "VALE3", "prize": 82.30, "opening": 81.22, "closing": 82.30, "variation": 82.20 },
      { "month": "Ago", "symbol": "VALE3", "prize": 82.70, "opening": 81.85, "closing": 82.70, "variation": 83.60 },
      { "month": "Set", "symbol": "VALE3", "prize": 83.20, "opening": 82.73, "closing": 83.20, "variation": 82.70 },
      { "month": "Out", "symbol": "VALE3", "prize": 83.10, "opening": 82.29, "closing": 83.10, "variation": 83.50 },
      { "month": "Nov", "symbol": "VALE3", "prize": 83.60, "opening": 83.10, "closing": 83.60, "variation": 82.15 },
      { "month": "Dez", "symbol": "VALE3", "prize": 84.02, "opening": 83.78, "closing": 84.02, "variation": 83.89 },
      { "month": "Jul", "symbol": "PETR4", "prize": 29.56, "opening": 28.92, "closing": 29.56, "variation": 31.09 },
      { "month": "Ago", "symbol": "PETR4", "prize": 30.50, "opening": 29.12, "closing": 30.50, "variation": 29.56 },
      { "month": "Set", "symbol": "PETR4", "prize": 30.67, "opening": 29.71, "closing": 30.67, "variation": 31.09 },
      { "month": "Out", "symbol": "PETR4", "prize": 30.83, "opening": 29.85, "closing": 30.83, "variation": 30.67 },
      { "month": "Nov", "symbol": "PETR4", "prize": 31.09, "opening": 30.02, "closing": 31.09, "variation": 31.45 },
      { "month": "Dez", "symbol": "PETR4", "prize": 31.45, "opening": 30.95, "closing": 31.45, "variation": 31.19 },
    ];

    setDataCharts(dataCharts);
    setChartType("LineChart");
  }, []);

  useEffect(() => {
    handleLoadData();
  }, [handleLoadData]);




  const handleTableClick = (e) => {
    const tr = e.target.parentElement;
    const selectedValue = tr.id;
    setSelectedValue(selectedValue);
    const filteredData = dataCharts.filter(item => {
      return item.symbol.toLowerCase().includes(selectedValue.toLowerCase());
    });

    const selectedData = [];

    if (chartType === "LineChart") {
      const dataHeader = ["Mês", selectedValue];
      selectedData.push(dataHeader);
      filteredData.forEach((d) => {
        const item = [d.month, d.prize];
        selectedData.push(item);
      });
    }
    else {
      const dataHeader = ["Mês", "", "", "", ""];
      selectedData.push(dataHeader);
      filteredData.forEach((d) => {
        const item = [d.month, d.prize, d.opening, d.closing, d.variation];
        selectedData.push(item);
      });
    }
    setSelectedData(selectedData);

  }

  const handleButtonClickLine = (e) => {
    setChartType("LineChart");
    const filteredData = dataCharts.filter(item => {
      return item.symbol.toLowerCase().includes(selectedValue.toLowerCase());
    });

    const selectedData = [];

    const dataHeader = ["Mês", selectedValue];
    selectedData.push(dataHeader);
    filteredData.forEach((d) => {
      const item = [d.month, d.prize];
      selectedData.push(item);
    });
    setSelectedData(selectedData);
  }
  const handleButtonClickCandle = (e) => {
    setChartType("CandlestickChart");

    const filteredData = dataCharts.filter(item => {
      return item.symbol.toLowerCase().includes(selectedValue.toLowerCase());
    });

    const selectedData = [];

    const dataHeader = ["Mês", "", "", "", ""];
    selectedData.push(dataHeader);
    filteredData.forEach((d) => {
      const item = [d.month, d.prize, d.opening, d.closing, d.variation];
      selectedData.push(item);
    });
    setSelectedData(selectedData);
  }

  const handleButtonClickClose = (e) => {

    setSelectedValue("");
    setChartType("LineChart");
  }

  return (
    <div className="table-card">
      {!!selectedValue && (
        <>
          <ChartButton icon={faChartLine} handleClick={handleButtonClickLine} />
          <ChartButton icon={faChartBar} handleClick={handleButtonClickCandle} />
          <ChartButton icon={faWindowClose} handleClick={handleButtonClickClose} />
          <ChartContainer data={selectedData} chartType={chartType} />
        </>
      )}
      <Table data={data} handleClick={handleTableClick} />
    </div>
  );

};