import { NavLink } from "react-router-dom"
import style from './SideBar.module.scss'
import { clsx } from "clsx"
import { FC, useRef } from "react"
import { TfiClose } from "react-icons/tfi"
import useOnClickOutside from "@/hooks/useOnClickOutside"

type SideBarProps = {
    isActive: boolean;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}


const SideBar: FC<SideBarProps> = ({isActive, setIsActive}) => {
  const sideBarRef = useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setIsActive(false);
  };

  useOnClickOutside(sideBarRef, clickOutsidehandler);


  return (
    <section className={clsx(style.overlay, {[style.open]: isActive})}>
        <nav ref={sideBarRef} className={clsx(style.nav, {[style.left]: isActive})}>
            <TfiClose className={style.close} onClick={()=> {
                setIsActive(prev => !prev)
            }} />
            <section className={style.nav__main}>
              <NavLink className={(navData)=> {return navData.isActive ? `${style.nav__link} ${style.active}` : `${style.nav__link}` }} to="/"> Главная</NavLink>
              <NavLink className={style.nav__link} to="/favorites">Мои Треки</NavLink>
            </section>
        </nav>
    </section>
  )
}

export default SideBar