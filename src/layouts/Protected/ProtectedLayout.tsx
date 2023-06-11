import Header from "@/components/Header/Header";
import style from "./ProtectedLayout.module.scss";

const ProtectedLayout = () => {
  return (
    <div className={style.container}>
      <Header />
    </div>
  );
};
export default ProtectedLayout;
