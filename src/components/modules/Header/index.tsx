"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import Cetegory from "@/components/elements/Menu/Cetegory";
import { navLinks } from "@/constants/navLinks";
import stylesNav from "@/styles/navbar/index.module.scss";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const clickMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className={stylesNav.header}>
        <nav className={stylesNav.header_nav}>
          <div className={stylesNav.header_menu} onClick={clickMenu}>
            {open ? (
              <>
                <Image
                  src="icons/cross.svg"
                  alt="Скрыть меню"
                  width={24}
                  height={24}
                />
                <span className={stylesNav.menu}>menu</span>
              </>
            ) : (
              <>
                <Image
                  src="icons/menu_burger.svg"
                  alt="Раскрыть меню"
                  width={24}
                  height={24}
                />
                <span className={stylesNav.menu}>menu</span>
              </>
            )}
          </div>
          <ul className={stylesNav.nav}>
            {navLinks.map((item) => (
              <li key={item.title}>
                <Link href={item.path} className={stylesNav.nav_link}>
                  {item.icon ? item.icon : item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Cetegory open={open} />
    </>
  );
};

export default Header;
