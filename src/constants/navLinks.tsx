import Image from "next/image";

export const navLinks = [
  {
    title: "KIOTO",
    path: "/",
  },
  {
    title: "Корзина",
    path: "/cart",
    icon: (
      <Image src="icons/shop_basket.svg" alt="Корзина" width={24} height={24} />
    ),
  },
  {
    title: "Профиль",
    path: "/profiles",
    icon: (
      <Image
        src="icons/user.svg"
        alt="Профиль пользователя"
        width={24}
        height={24}
      />
    ),
  },
];
