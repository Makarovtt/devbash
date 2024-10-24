export interface IGetMenuCafe {
  goods: IGood[];
  catGoods: ICatGood[];
  allItems: IAllItem[];
}

export interface IGood {
  id: string;
  picture: string;
  title: string;
  description: string;
  price?: string;
  price_delivery?: string;
  portion: string;
  min_portion: string;
  unit: string;
  category: string;
  category_url: string;
  delivery: string;
  order_goods: string;
}

export interface ICatGood {
  id: string;
  title: string;
  url: string;
  delivery: string;
  order_categories: string;
}

export interface IAllItem {
  category: string;
  delivery: string;
}

export type IGetProduct = Omit<
  IGood,
  "category_url" | "category" | "delivery" | "order_goods"
>;

export interface ICafeOrder extends IGetProduct {
  quantity: number;
}

export type ITypeMenu = "cafe" | "delivery" | "";
