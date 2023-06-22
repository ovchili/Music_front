import style from "./Filter.module.scss";
import FilterItem from "./FilterItem/FilterItem";

const Filter = () => {
  return (
    <section className={style.filter}>
      <span className={style.filter__text}>Искать по: </span>
      <div className={style.filter__container}>
        <FilterItem name="Исполнителю" />
        <FilterItem name="Году выпуска" />
        <FilterItem name="Жанру" />
      </div>
    </section>
  );
};
export default Filter;
