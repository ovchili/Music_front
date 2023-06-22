import Filter from "./Filter/Filter";
import style from "./Main.module.scss";
import PlayList from "./PlayList/PlayList";
import Selections from "./Selection/Selection";

const Main = () => {
  return (
    <section className={style.main}>
      <h1 className={style.heading}>Треки</h1>
      <Filter />
      <main className={style.data}>
        <PlayList />
        <Selections />
      </main>
    </section>
  );
};

export default Main;
