import Header from "@/components/Header/Header";
import style from "./ProtectedLayout.module.scss";
import Main from "@/components/Main/Main";

const ProtectedLayout = () => {
  return (
    <div className={style.container}>
      <Header />
      <Main />
    </div>
  );
};
export default ProtectedLayout;
