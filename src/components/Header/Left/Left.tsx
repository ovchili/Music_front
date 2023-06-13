import Logo from "@/ui/Logo/Logo";
import { TfiMenu } from "react-icons/tfi";

import style from "./Left.module.scss";

import SideBar from "@/ui/SideBar/SideBar";
import { useState } from "react";


const Left = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <section className={style.left}>
      <SideBar setIsActive={setIsActive} isActive={isActive} />
      <section className={style.menu}>
        <TfiMenu onClick={()=>{
          setIsActive(prev=>!prev)
        }}/>
      </section>
      <Logo />
    </section>
  );
};

export default Left;
