import clsx from "clsx";
import style from "./PlayListItem.module.scss";
import { TbHeart, TbMusic, TbPlayerPlay } from "react-icons/tb";

const PlayListItem = () => {
  return (
    <ul className={style.item}>
      <li className={style.item__column}>
        <div className={style.item__icon}>
          <TbMusic className={style.item__icon_default} />
          <TbPlayerPlay className={style.item__icon_play} />
        </div>
        Guilt
      </li>
      <li className={style.item__column}>Nero</li>
      <li className={clsx(style.item__column, style.item__secondary)}>
        Welcome Reality
      </li>
      <li className={clsx(style.item__column, style.item__secondary)}>
        <TbHeart className={style.item__heart} />
        4:44
      </li>
    </ul>
  );
};

export default PlayListItem;
