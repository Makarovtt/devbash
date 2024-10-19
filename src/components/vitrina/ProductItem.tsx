import { FC, memo, useState } from "react";
import { IGood, ITypeMenu } from "../../interfaces/menu-cafe.interface";
import Image from "next/image";
import { convertPrice } from "@/lib/utils";
import { GoldButton } from "@/ui/GoldButton";
import Loader from "@/public/images/menu-page/no-image.png";
import { ProductModal } from "./ProductModal";
import { useAppDispatch } from "@/store/hooks";
import { addToCafeOrder } from "@/store/features/cafe.slice";
import { Check } from "lucide-react";
import { addToDeliveryOrder } from "@/store/features/delivery.slice";

interface IProps {
  item: IGood;
  type: ITypeMenu;
  isOrder?: boolean;
}

export const ProductItem: FC<IProps> = memo(function MemoProductItem({
  item,
  type,
  isOrder = true,
}) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [errorImage, setErrorImage] = useState(false);
  // console.log("rerender");

  function putToBasket(data: IGood) {
    if (type === "cafe") {
      dispatch(addToCafeOrder(data));
    } else {
      dispatch(addToDeliveryOrder(data));
    }
  }
  const arrImage = item.picture.split(",");
  return (
    <>
      <li
        className="bg-bgBlock pb-6 rounded-lg overflow-hidden m-4 cursor-pointer
                    flex flex-col justify-between max-w-[270px] group
                    1200:-ml-1"
      >
        <div
          className=" shrink-0 h-[178px] w-[270px] overflow-hidden flex 
                        justify-center items-center relative"
        >
          <Image
            // src={arrImage[0]}
            src={errorImage ? Loader : arrImage[0]}
            alt={item.title}
            placeholder="blur"
            loading="lazy"
            quality={100}
            blurDataURL="/tube-spinner.svg"
            // loader={() => <Spinner color="warning" />}
            // blurDataURL={<Spinner color="warning" />}
            onError={() => setErrorImage(true)}
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
        {type === "cafe" ? (
          <div
            className="flex justify-center"
            onClick={() => putToBasket(item)}
          >
            <GoldButton btnSize={"btnCard"}>
              {isOrder ? <Check /> : "Добавить к заказу"}
            </GoldButton>
          </div>
        ) : (
          <div
            className="flex justify-center"
            onClick={() => putToBasket(item)}
          >
            <GoldButton btnSize={"btnCard"}>
              {isOrder ? <Check /> : "Положить в корзину"}
            </GoldButton>
          </div>
        )}
      </li>
      <ProductModal
        info={item}
        isModal={isModal}
        onClose={() => setIsModal(false)}
        type={type}
        isOrder={isOrder}
        putToBasket={putToBasket}
      />
    </>
  );
});
