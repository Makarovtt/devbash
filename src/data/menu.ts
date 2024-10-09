import { IMenuList } from "./interface";

export const defaultCategoryCafe = "goryachie-zakuski";
export const defaultCategoryDelivery = "shashlyk";

export const menuList: IMenuList[] = [
  {
    id: 1,
    title: "Главная",
    href: "/",
  },
  {
    id: 2,
    title: "Меню ресторана",
    href: `/menu-cafe/${defaultCategoryCafe}`,
  },
  {
    id: 3,
    title: "Доставка",
    href: `/menu-delivery/${defaultCategoryDelivery}`,
  },
  {
    id: 4,
    title: "О кафе",
    href: "/about",
  },
  {
    id: 5,
    title: "Условия доставки",
    href: "/#terms-delivery",
  },
  {
    id: 6,
    title: "Контакты",
    href: "/#contact",
  },
];
