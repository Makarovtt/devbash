import { ICafeOrder } from "@/interfaces/menu-cafe.interface";
import { useAppSelector } from "@/store/hooks";
import { FC, useRef } from "react";
import { convertPrice } from "@/lib/utils";
import { OrderItemCafe } from "./OrderItemCafe";

export const CafeOrder: FC = () => {
  const cafeInfo: ICafeOrder[] = useAppSelector((state) => state.cafeReducer);
  const finalPrice = useRef<number>(0);
  finalPrice.current = 0;
  return (
    <>
      <h1 className="text-[24px]">Ваш заказ в ресторане:</h1>
      {cafeInfo.length ? (
        <>
          <div
            className="max-h-[60%] overflow-y-auto basket--scrollbar w-full mx-2
                        pr-2 flex flex-col gap-4 border-2 border-gray-900"
          >
            {cafeInfo.map((item: ICafeOrder) => {
              finalPrice.current =
                finalPrice.current + Number(item.price) * item.quantity;
              return <OrderItemCafe key={item.id} item={item} />;
            })}
          </div>
          <div className="flex flex-col items-center mt-[30px] max-h-[20%] min-h-[20%]">
            <p className="text-[16px] text-[#b7b7b7]">
              Общая стоимость{" "}
              <span className="text-white text-[24px] font-bold text-right inline-block ml-[15px]">
                {convertPrice(finalPrice.current)}
              </span>
            </p>
          </div>
        </>
      ) : (
        <>Заказ пуст. Выберите любое блюдо</>
      )}
    </>
  );
};
