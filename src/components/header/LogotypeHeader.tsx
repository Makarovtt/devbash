import Image from "next/image";
import { FC } from "react";

export const LogotypeHeader: FC = () => {
  return (
    <div className="w-[23%] text-center ml-8">
      <Image
        src="/images/header/db.png"
        alt="logo"
        width={94}
        height={98}
        className=""
      />
    </div>
  );
};
