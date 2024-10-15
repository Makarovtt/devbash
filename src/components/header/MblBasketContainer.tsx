import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import { FC } from "react";
import { CafeOrder } from "../cafe-order/CafeOrder";
import { ITypeMenu } from "@/interfaces/menu-cafe.interface";
import { DeliveryOrder } from "../delivery-order/DeliveryOrder";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleAsideOrder } from "@/store/features/aside-menu-order.slice";

interface IProps {
  className?: string;
  typeMenu: ITypeMenu;
}

export const MblBasketContainer: FC<IProps> = ({ className, typeMenu }) => {
  const isOpenBasket = useAppSelector((state) => state.isOpenAsideOrderReducer);
  const dispatch = useAppDispatch();
  const closeAside = () => {
    dispatch(toggleAsideOrder());
  };
  if (typeof window == "object") {
    if (isOpenBasket) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <div
      className={cn(
        "fixed top-0 bg-[rgb(15,15,19)] z-30 transition-all",
        "w-full h-full flex flex-col items-center justify-center gap-7",
        "1000:max-w-[650px] 1000:shadow-[rgba(6,6,6,0.86)_-13px_0px_21.84px_2.16px]",
        isOpenBasket ? "right-0" : "-right-full",
        className
      )}
    >
      <Button
        isIconOnly
        className="top-3 right-3 absolute"
        onPress={closeAside}
      >
        <X />
      </Button>
      {typeMenu === "cafe" ? <CafeOrder /> : <DeliveryOrder />}
    </div>
  );
};
