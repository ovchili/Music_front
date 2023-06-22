import style from "./PlayList.module.scss";
import { TbClockHour9 } from "react-icons/tb";
import PlayListItem from "./PlayListItem/PlayListItem";

import { useCallback, useEffect, useState } from "react";

const PlayList = () => {
  return (
    <section className={style.playlist}>
      <header className={style.playlist__header}>
        <li className={style.playlist__column}>Трек</li>
        <li className={style.playlist__column}>Исполнитель</li>
        <li className={style.playlist__column}>Альбом</li>
        <li className={style.playlist__column}>
          <TbClockHour9 />
        </li>
      </header>
      <main className={style.playlist__main}>
        <PlayListItem />

        <PlayListItem />

        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
        <PlayListItem />
      </main>
    </section>
  );
};

export default PlayList;
