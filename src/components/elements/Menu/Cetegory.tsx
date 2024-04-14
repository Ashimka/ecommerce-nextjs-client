"use client";

import Link from "next/link";
import React from "react";
import { menuList } from "@/constants/menuList";

import styleCat from "@/styles/category/index.module.scss";

const Cetegory = ({ open }: { open: boolean }) => {
  return (
    <>
      {open && (
        <div className={styleCat.cat}>
          {menuList.map((item) => (
            <Link
              href={item.path}
              key={item.name}
              className={styleCat.cat__list}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Cetegory;
