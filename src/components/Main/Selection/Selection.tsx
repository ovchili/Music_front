import style from "./Selection.module.scss";
import SelectionItem from "./SelectionItem/SelectionItem";

const Selections = () => {
  return (
    <aside className={style.selections}>
      <SelectionItem />
      <SelectionItem />
      <SelectionItem />
    </aside>
  );
};
export default Selections;
