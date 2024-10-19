import { FC } from "react";
import {
  ICafeOrder,
  IGood,
  ITypeMenu,
} from "../../interfaces/menu-cafe.interface";
import { ProductItem } from "./ProductItem";

interface IProps {
  products: IGood[] | undefined;
  isLoading: boolean;
  title: string;
  type?: ITypeMenu;
  order: ICafeOrder[];
}

export const Vitrina: FC<IProps> = ({
  products,
  isLoading,
  title,
  type = "cafe",
  order,
}) => {
  if (isLoading) return <div className="text-white">Загрузка ...</div>;
  return (
    <div className="py-12">
      <h1>{title}</h1>
      <ul className="flex flex-wrap justify-center mt-10 ">
        {products &&
          products.map((item) => {
            const check = !!order.find((order) => order.id === item.id);
            return (
              <ProductItem
                key={item.id}
                item={item}
                type={type}
                isOrder={check}
              />
            );
          })}
      </ul>
    </div>
  );
};
