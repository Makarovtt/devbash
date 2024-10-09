import { FC } from "react";
import { IGood } from "../menu-cafe/menu-cafe.interface";
import { ProductItem } from "./ProductItem";

interface IProps {
  products: IGood[] | undefined;
  isLoading: boolean;
  title: string;
  type?: "delivery" | "cafe";
}

export const Vitrina: FC<IProps> = ({
  products,
  isLoading,
  title,
  type = "cafe",
}) => {
  if (isLoading) return <div className="text-white">Загрузка ...</div>;
  return (
    <div className="py-12">
      <h1>{title}</h1>
      <ul className="flex flex-wrap justify-center mt-10 -mx-4">
        {products &&
          products.map((item) => {
            return <ProductItem key={item.id} item={item} type={type} />;
          })}
      </ul>
    </div>
  );
};
