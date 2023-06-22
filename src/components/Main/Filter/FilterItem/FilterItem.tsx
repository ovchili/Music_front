import { FC } from "react";
import style from "./FilterItem.module.scss";

type FilterItemProps = {
  name: string;
};

const FilterItem: FC<FilterItemProps> = ({ name }) => {
  return <div className={style.item}>{name}</div>;
};
export default FilterItem;
