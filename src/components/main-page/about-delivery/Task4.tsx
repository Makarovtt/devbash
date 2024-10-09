import { NumberInBlock } from "@/ui/NumberInBlock";
import Image from "next/image";
import { FC } from "react";

export const Task4: FC = () => {
  return (
    <div
      className="rounded-lg bg-bgBlock w-full h-[280px] mb-[25px] relative p-[30px]
                  1250:w-[370px]"
    >
      <h4>Насладитесь вкусной и горячей едой</h4>
      <Image
        src="/images/main-page/card4.png"
        width={239}
        height={205}
        alt=""
        className="absolute bottom-0 -right-2"
      />
      <NumberInBlock>04</NumberInBlock>
    </div>
  );
};
