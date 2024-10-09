import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
interface IProps {
  className?: string;
  isBasketShow?: boolean;
  setIsOpenBasket: (arg0: boolean) => void;
}
export const BasketHeader: FC<IProps> = ({
  className,
  // isBasketShow = true,
  setIsOpenBasket,
}) => {
  // const [basketToggle, setBasketToggle] = useState<boolean>(false);
  // const toggleBasketHandler = (value: boolean) => {
  //   setBasketToggle(value);
  // };
  // console.log(basketToggle);
  return (
    <>
      {/* {pathname === "/menu-cafe" && ( */}
      <div
        onClick={() => setIsOpenBasket(true)}
        className={cn(
          "cursor-pointer index-10",
          className
          // isBasketShow ? "block" : "hidden"
          // animate
        )}
      >
        <Image
          src="/images/header/backet-icon.svg"
          alt="basket"
          width={60}
          height={60}
        />
        {/* {!!countProducts && (
              <div className="count-basket-products">
                <p>{countProducts}</p>
              </div>
            )} */}
      </div>
      {/* )} */}
    </>
  );
};
