import { TfiSearch } from 'react-icons/tfi';
import style from './Center.module.scss'

const Center = () => {
  return <section className={style.center}>
    <TfiSearch className={style.search__icon} />
    <input className={style.search} type="search" placeholder='Поиск'/>
  </section>;
};
export default Center;
