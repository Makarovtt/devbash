import { ICafeOrder } from "@/interfaces/menu-cafe.interface";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC, useRef } from "react";
import { convertPrice } from "@/lib/utils";
import { OrderItemDelivery } from "./OrderItemDelivery";
import { GoldButton } from "@/ui/GoldButton";
import { toggleAsideOrder } from "@/store/features/aside-menu-order.slice";
import { useRouter } from "next/navigation";

export const DeliveryOrder: FC = () => {
  const router = useRouter();
  const deliveryInfo: ICafeOrder[] = useAppSelector(
    (state) => state.deliveryReducer
  );
  const dispatch = useAppDispatch();
  const closeAside = () => {
    dispatch(toggleAsideOrder());
    router.push("/order");
  };

  const finalPrice = useRef<number>(0);
  finalPrice.current = 0;
  return (
    <>
      <h1 className="text-[24px]">Ваш заказ доставки:</h1>
      {deliveryInfo.length ? (
        <>
          <div
            className="max-h-[60%] overflow-y-auto basket--scrollbar w-full mx-2
                        pr-2 flex flex-col gap-4 border-2 border-gray-900"
          >
            {deliveryInfo.map((item: ICafeOrder) => {
              finalPrice.current =
                finalPrice.current + Number(item.price) * item.quantity;
              return <OrderItemDelivery key={item.id} item={item} />;
            })}
          </div>
          <div className="flex flex-col items-center mt-[30px] max-h-[20%] min-h-[20%]">
            <div>
              <GoldButton btnSize={"btnCard"} onClick={closeAside}>
                Оформить заказ
              </GoldButton>
            </div>
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
