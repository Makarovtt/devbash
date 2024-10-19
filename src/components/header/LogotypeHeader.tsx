import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const LogotypeHeader: FC = () => {
  return (
    <div className="w-[23%] text-center ml-8">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/images/header/db.png"
          alt="logo"
          width={94}
          height={98}
          className=""
        />
      </Link>
    </div>
  );
};
