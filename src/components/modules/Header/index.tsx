"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

import Cetegory from "@/components/elements/Menu/Cetegory";
import { navLinks } from "@/constants/navLinks";
import { useClickOutside } from "@/hooks/useClickOutside";

import cross from "../../../../public/icons/cross.svg";
import menuBurger from "../../../../public/icons/menu_burger.svg";

import stylesNav from "@/styles/navbar/index.module.scss";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const menuRef = useClickOutside(() => setOpen(false));

  const clickMenu = () => {
    setOpen(!open);
    document.querySelector("body")?.classList.toggle("hidden");
  };

  return (
    <>
      <header className={`container ${stylesNav.header}`}>
        <nav className={stylesNav.header_nav}>
          <div
            className={stylesNav.header_menu}
            onClick={clickMenu}
            ref={menuRef}
          >
            {open ? (
              <>
                <Image src={cross} alt="Скрыть меню" width={24} height={24} />
                <span className={stylesNav.menu}>menu</span>
              </>
            ) : (
              <>
                <Image
                  src={menuBurger}
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
        <Cetegory open={open} />
      </header>
    </>
  );
};

export default Header;
