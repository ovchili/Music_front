import Logo from "@/ui/Logo/Logo";
import { TfiMenu } from "react-icons/tfi";

import style from "./Left.module.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Left = () => {
  return (
    <section className={style.left}>
      <nav className={style.nav}>
        <NavLink to="/"> Главная</NavLink>
        <NavLink to="/favorites">Мои Треки</NavLink>
      </nav>
      <section className={style.menu}>
        <TfiMenu />
      </section>
      <Logo />
    </section>
  );
};

export default Left;
