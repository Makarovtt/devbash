import { NumberInBlock } from "@/ui/NumberInBlock";
import Image from "next/image";
import { FC } from "react";

export const Task2: FC = () => {
  return (
    <div
      className="rounded-lg bg-bgBlock w-full h-[215px] mb-[25px] relative p-[30px]
                    1250:w-[370px]"
    >
      <h4>Позвоните или оставьте заказ на сайте</h4>
      <Image
        src="/images/main-page/card2.png"
        width={239}
        height={205}
        alt=""
        className="absolute bottom-0 -right-2"
      />
      <NumberInBlock>02</NumberInBlock>
    </div>
  );
};
