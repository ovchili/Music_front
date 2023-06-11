import Center from "./Center/Center";
import style from "./Header.module.scss";
import Left from "./Left/Left";
import Right from "./Right/Right";

const Header = () => {
  return (
    <header className={style.header}>
      <Left />
      <Center />
      <Right />
    </header>
  );
};
export default Header;
