import { useCallback, useEffect, useState } from 'react';
import { Table } from '../Table';
import './styles.css'

export const TableCard = () => {

  const [data, setData] = useState([]);
  const handleLoadData = useCallback(async () => {
    //const data = await loadPie();

    const data = [
      { 'symbol': 'PETR4', 'name': 'Petroleo Brasileiro SA Petrobras Preference Shares', 'prize': '31,50 BRL', 'oscillation': '0,15%', 'volume': 'R$ 1,12 bi' },
      { 'symbol': 'ITUB4', 'name': 'Itaú Unibanco', 'prize': '23,50 BRL', 'oscillation': '0,01%', 'volume': 'R$ 412,55 mi' },
      { 'symbol': 'VALE3', 'name': 'Vale ', 'prize': '84,49 BRL', 'oscillation': '-0,23%', 'volume': 'R$ 816,63 mi' },
    ]
    console.log(data);
    setData(data);
  }, []);

  useEffect(() => {
    handleLoadData();
  }, [handleLoadData]);




  const handleTableClick = (e) => {
    console.log("clicou", e.target)
  }
  return (
    <div className="table-card">
      <Table data={data} handleClick={handleTableClick} />
    </div>

  );

};