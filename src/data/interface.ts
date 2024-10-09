export interface IMenuList {
  id: number;
  title: TMenuNavigation;
  href: string;
}

export type TMenuNavigation =
  | "Главная"
  | "Меню ресторана"
  | "Доставка"
  | "О кафе"
  | "Условия доставки"
  | "Контакты";

export interface ISwiperSlider {
  id: number;
  href: string;
  teg: string;
}

export interface IGalleryCafe {
  id: number;
  href: string;
}
