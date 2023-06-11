import { Link } from "react-router-dom";
import logo from "@/assets/images/logo__white.png";
import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={style.logo}>
      <img src={logo} alt="Logo" />
    </Link>
  );
};
export default Logo;
