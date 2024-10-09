import Image from "next/image";
import { FC } from "react";

export const Task5: FC = () => {
  return (
    <div className="absolute w-[440px] h-[519px] bottom-0 -right-[17px]">
      <Image
        src="/images/main-page/card5.png"
        fill
        alt=""
        className="object-contain h-full"
      />
    </div>
  );
};
