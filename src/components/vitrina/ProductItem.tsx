import { FC, useState } from "react";
import { IGood } from "../menu-cafe/menu-cafe.interface";
import Image from "next/image";
import { convertPrice } from "@/lib/utils";
import { GoldButton } from "@/ui/GoldButton";
import { ProductModal } from "./ProductModal";

interface IProps {
  item: IGood;
  type: string;
}

export const ProductItem: FC<IProps> = ({ item, type }) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const arrImage = item.picture.split(",");
  return (
    <>
      <li
        className="bg-bgBlock pb-6 rounded-lg overflow-hidden m-4 cursor-pointer
                    flex flex-col justify-between max-w-[270px] group"
      >
        <div
          className=" shrink-0 h-[178px] w-[270px] overflow-hidden flex 
                        justify-center items-center relative"
        >
          <Image
            src={arrImage[0]}
            alt=""
            fill
            onClick={() => setIsModal(true)}
            className="object-cover transition group-hover:scale-125"
          />
        </div>
        <ul className="px-5 mb-2.5 flex flex-col justify-between h-full">
          <li>
            <h4 className="my-2.5 max-w-[200px] break-words">{item.title}</h4>
          </li>
          <li>
            <p className="text-[14px] font-light text-[rgb(110,110,110)] italic">
              {item.description}
            </p>
          </li>
          <li className="mt-7 flex justify-between items-end">
            <div className="text-[12px] font-light text-[rgb(223,223,223)] block mb-1">
              Цена за <b className="font-bold">{item.min_portion}</b>{" "}
              {item.unit}
            </div>
            <div className="text-[24px] font-bold">
              {convertPrice(
                Number(type === "cafe" ? item.price : item.price_delivery)
              )}
            </div>
          </li>
        </ul>
        <div className="flex justify-center">
          <GoldButton btnSize={"btnCard"}>Добавить в корзину</GoldButton>
        </div>
      </li>
      <ProductModal
        info={item}
        isModal={isModal}
        onClose={() => setIsModal(false)}
      />
    </>
  );
};
