import { FC } from "react";
import { convertPrice } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { ICafeOrder } from "@/interfaces/menu-cafe.interface";
import { useAppDispatch } from "@/store/hooks";
import {
  addItemToCafeOrder,
  deleteItemToCafeOrder,
  removeItemToCafeOrder,
} from "@/store/features/cafe.slice";

interface IProps {
  item: ICafeOrder;
}

export const OrderItemCafe: FC<IProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  function addItemToBasket(id: number) {
    dispatch(addItemToCafeOrder(id));
  }
  function removeItemToBasket(id: number) {
    dispatch(removeItemToCafeOrder(id));
  }
  function deleteItemToBasket(id: number) {
    dispatch(deleteItemToCafeOrder(id));
  }
  return (
    <div className="relative flex items-end bg-bgBlock p-3">
      <div className="flex items-center">
        <div
          className="w-[100px] min-w-[100px] h-[80px] overflow-hidden 
                                relative flex justify-center items-center"
        >
          <Image
            src={item.picture}
            alt=""
            fill
            className="object-cover h-full"
          />
        </div>
        <ul className="flex items-start ml-4 flex-col 600:flex-row 600:items-end">
          <li>
            <p
              className="text-[14px] text-[rgb(219,219,219)] w-[150px] mr-2.5 mb-2.5
                          1000:text-[16px] 1000:mb-0"
            >
              {item.title}
            </p>
          </li>
          <li>
            <div className="select-none flex flex-col 600:ml-1">
              <label className="text-[12px] text-[rgb(223,223,223)]">
                Кол-во {item.unit}
              </label>
              <div className="bg-white rounded-md w-[100px] h-[35px] flex justify-center items-center mt-2">
                <div className="cursor-pointer flex items-center py-2.5">
                  <Button
                    isIconOnly
                    className="bg-transparent h-8"
                    onPress={() => removeItemToBasket(Number(item.id))}
                    isDisabled={item.quantity === 1}
                  >
                    <Minus color="#1e1d1d" size={19} />
                  </Button>
                </div>
                <div className="text-center w-[60px] font-semibold text-[16px] text-[rgb(30,29,29)] relative top-0.5">
                  <span>{item.quantity * Number(item.portion)}</span>
                </div>
                <div className="cursor-pointer flex items-center py-2.5">
                  <Button
                    isIconOnly
                    className="bg-transparent h-8"
                    onPress={() => addItemToBasket(Number(item.id))}
                  >
                    <Plus color="#1e1d1d" size={19} />
                  </Button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="flex items-end p-2.5 mt-2.5 bg-[rgb(43,43,53)] 
                            600:mt-0 600:bg-none 600:p-0 600:pl-[30px]"
            >
              <p className="mr-[5px] text-white font-semibold text-[24px] w-[110px]">
                {convertPrice(Number(Number(item.price) * item.quantity))}
              </p>
              <i>
                <Button
                  isIconOnly
                  className="bg-transparent h-8"
                  onPress={() => deleteItemToBasket(Number(item.id))}
                >
                  <Trash2 color="white" />
                </Button>
              </i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};