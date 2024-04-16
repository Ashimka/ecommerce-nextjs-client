import Link from "next/link";
import React from "react";

import style from "@/styles/notFound/index.module.scss";

const notFound = () => {
  return (
    <div className={style.container}>
      <div className={style.not_found}>
        <span className={style.not_found__title}>Страница не найдена</span>
        <Link className={style.not_found__link} href={"/"}>
          на главную
        </Link>
      </div>
    </div>
  );
};

export default notFound;
