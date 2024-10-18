import { FC } from "react";
import { ICafeOrder, ITypeMenu } from "../../interfaces/menu-cafe.interface";
import { ModalWindow } from "@/ui/modal/ModalWindow";
import Image from "next/image";
import { GoldButton } from "@/ui/GoldButton";
import { convertPrice } from "@/lib/utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Check } from "lucide-react";

interface IProps {
  item: ICafeOrder;
  isModal: boolean;
  type?: ITypeMenu;
  onClose: () => void;
  isOrder: boolean;
}

export const BasketModal: FC<IProps> = ({
  item,
  isModal,
  onClose,
  type,
  isOrder,
}) => {
  // const dataProduct
  // if(item) {

  // }

  const arrImage = item?.picture.split(",");

  if (typeof window === "object") {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <ModalWindow isVisible={isModal} onClose={onClose}>
      <div
        className="bg-[url(/images/back.jpg)] bg-black border border-gray-500 rounded-lg
                    px-1 py-3 flex justify-center items-center
                    flex-col gap-3 overflow-hidden w-[98vw]
                    400:p-5
                    600:w-[90vw] 600:p-14 1000:w-[900px] 1600:w-[1500px] "
      >
        <div className="w-full relative mb-12">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            scrollbar={{ draggable: true }}
            pagination={{
              el: "[data-slider-dots]",
              type: "bullets",
              clickable: true,
              bulletClass:
                "bg-yellow-900 mx-1 rounded-full w-3 h-3 flex justify-center items-center cursor-pointer hover:bg-yellow-600",
              bulletActiveClass: "text-white !bg-yellow-500",
              renderBullet: function (index, className) {
                return `<div class="${className}"></div>`;
              },
            }}
          >
            {arrImage?.map((item: string) => {
              return (
                <SwiperSlide key={item}>
                  <div
                    className="relative h-[250px] w-full shrink-0 overflow-hidden
                              600:h-[350px] 800:h-[450px] 1000:h-[520px]
                                  1250:h-[600px]"
                  >
                    <Image
                      src={item}
                      alt=""
                      fill
                      className="object-contain h-full rounded-lg shadow-xl object-center"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div
            className="absolute !-bottom-8 flex item-center justify-center w-full"
            data-slider-dots
          ></div>
        </div>

        <h2>{item?.title}</h2>
        {item?.description && (
          <p className="text-[16px] text-gray-400 italic mx-5">
            {item?.description}
          </p>
        )}
        <div className="mt-7 flex justify-between items-end gap-10">
          <div className="text-[14px] font-light text-[rgb(223,223,223)] block mb-1">
            Цена за <b className="font-bold">{item?.min_portion}</b>{" "}
            {item?.unit}
          </div>
          <div className="text-[24px] font-bold">
            {convertPrice(Number(item?.price))}
          </div>
        </div>

        <div
          className="flex justify-center"
          //   onClick={() => info && putToBasket(info)}
        >
          <GoldButton btnSize={"btnCard"}>
            {isOrder ? (
              <Check />
            ) : type === "cafe" ? (
              "Добавить к заказу"
            ) : (
              "Положить в корзину"
            )}
          </GoldButton>
        </div>
      </div>
    </ModalWindow>
  );
};
