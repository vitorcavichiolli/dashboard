import './styles.css';
import { ChartsBox } from "../../components/ChartsBox";
import { TableBox } from '../../components/TableBox';

export const Home = () => {

  return (
    <section className='container'>
      <ChartsBox />
      <TableBox />
    </section>
  )
}

export default Home;
