import img from "@/assets/images/playlist.png";
import style from "./SelectionItem.module.scss";
import { Link } from "react-router-dom";

const SelectionItem = () => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={style.item}>
      <span className={style.item__text}>Плейлист дня</span>
    </div>
  );
};
export default SelectionItem;
