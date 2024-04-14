import Image from "next/image";

import basket from "../../public/icons/shop_basket.svg";
import user from "../../public/icons/user.svg";

export const navLinks = [
  {
    title: "KIOTO",
    path: "/",
  },
  {
    title: "Корзина",
    path: "/cart",
    icon: <Image src={basket} alt="Корзина" width={24} height={24} />,
  },
  {
    title: "Профиль",
    path: "/auth/login",
    icon: (
      <Image src={user} alt="Профиль пользователя" width={24} height={24} />
    ),
  },
];
