import { Th } from '../Th';
import './styles.css'

export const TableHead = () => {
  return (
    <thead className="table-head">
      <tr className='table-row'>
        <Th text={"Ação"} />
        <Th text={"Nome"} />
        <Th text={"Preço"} />
        <Th text={"Variação"} />
        <Th text={"Volume"} />
      </tr>
    </thead>
  );

};