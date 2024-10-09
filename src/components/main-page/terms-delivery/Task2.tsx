import { NumberInBlock } from "@/ui/NumberInBlock";
import Image from "next/image";
import { FC } from "react";

export const Task2: FC = () => {
  return (
    <div className="rounded-lg bg-bgBlock h-[250px] relative p-[30px] my-3 760:my-0">
      <h4 className="w-[280px] mb-[10px] text-[20px]">
        Бесплатная доставка{" "}
        <span className="text-[rgb(247,212,142)] font-semibold">от 3 кг</span>
      </h4>
      <p className="w-[245px]">При заказе от 3 000 кг доставка бесплатная</p>
      <NumberInBlock className="right-[30px]">02</NumberInBlock>
      <Image
        src="/images/main-page/right-card-light.png"
        width={360}
        height={250}
        alt=""
        className="absolute top-0 right-0"
      />
    </div>
  );
};
