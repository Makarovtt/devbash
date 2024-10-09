import Image from "next/image";
import { FC } from "react";

export const AboutLeft: FC = () => {
  return (
    <div className="flex flex-col justify-between items-start mx-2 1250:mx-0">
      <h1 className="font-Berlingske">
        О нашем <span className="text-gold">кафе </span>
      </h1>
      <div className="cursor-pointer relative mt-7 grid place-items-center w-full">
        <div className="cursor-pointer relative flex justify-center items-center w-full">
          <Image
            src="/images/about/about.jpg"
            width={676}
            height={507}
            alt="Кафе «Девичья башня»"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
