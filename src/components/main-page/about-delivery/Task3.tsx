import { NumberInBlock } from "@/ui/NumberInBlock";
import Image from "next/image";
import { FC } from "react";

export const Task3: FC = () => {
  return (
    <div
      className="rounded-lg bg-bgBlock w-full h-[215px] mb-[25px] relative p-[30px]
                   1250:w-[370px]"
    >
      <h4>Ожидайте курьера</h4>
      <Image
        src="/images/main-page/card3.png"
        width={131}
        height={157}
        alt=""
        className="absolute bottom-0 right-5"
      />
      <NumberInBlock>03</NumberInBlock>
    </div>
  );
};
