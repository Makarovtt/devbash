import Image from "next/image";
import { FC } from "react";

export const ContactsHeader: FC = () => {
  return (
    <div
      className="hidden flex-col items-end w-[75%] pr-[100px]
                            1000:flex"
    >
      <div className="flex items-center">
        <Image
          src="/images/header/geolocation.png"
          width={41}
          height={41}
          alt="geolocation"
          className="mr-[10px]"
        />
        <div>
          <p className="font-800 text-lg text-white leading-6 font-bold">
            41-42-42, 422-000
          </p>
          <p className="font-400 text-base text-[rgb(218, 218, 218)] leading-6">
            ул. Медногорская, 121
          </p>
        </div>
      </div>

      <i className="hidden 1250:block mt-1.5">
        <svg width="288px" height="9px">
          <path
            fillRule="evenodd"
            fill="rgb(70, 70, 70)"
            d="M15.000,8.999 L15.000,7.999 L288.000,7.999 L288.000,8.999 L15.000,8.999 ZM-0.001,-0.000 L273.000,-0.000 L273.000,1.000 L-0.001,1.000 L-0.001,-0.000 Z"
          />
        </svg>
      </i>
    </div>
  );
};
