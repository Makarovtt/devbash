"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface IProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
  href?: string;
  btnSize: "btnPage" | "btnCard";
  onClick?: () => void;
}

interface IBtnPage {
  text: string;
  widthBtn: string;
  heightBtn: string;
  heightBtnMob: string;
  widthBtnMob: string;
  widthShadow: string;
  heightShadow: string;
  widthShadowMob: string;
  heightShadowMob: string;
}

const btnPage = {
  text: "text-[16px]",

  widthBtn: "1250:w-[320px]",
  heightBtn: "1250:h-[80px]",

  heightBtnMob: "h-[85px]",
  widthBtnMob: "w-[260px]",

  widthShadow: "1250:w-[280px]",
  heightShadow: "1250:h-[70px]",

  widthShadowMob: "w-[230px]",
  heightShadowMob: "h-[50px]",
};

const btnCard = {
  text: "text-[13px]",

  widthBtn: "1250:w-[220px]",
  heightBtn: "1250:h-[85px]",

  heightBtnMob: "h-[85px]",
  widthBtnMob: "w-[220px]",

  widthShadow: "1250:w-[200px]",
  heightShadow: "1250:h-[46px]",

  widthShadowMob: "w-[200px]",
  heightShadowMob: "h-[46px]",
};
let btn = {} as IBtnPage;

export const GoldButton: FC<IProps> = ({
  className,
  children,
  href = "#",
  btnSize,
  onClick,
}) => {
  switch (btnSize) {
    case "btnCard":
      btn = { ...btnCard };
      break;
    case "btnPage":
      btn = { ...btnPage };
      break;
  }
  return (
    <div
      className={cn(
        "select-none mt-5 relative flex justify-center",
        "items-center max-w-[260px] 1250:max-w-[320px]",
        className
      )}
      onClick={onClick}
    >
      {btnSize === "btnPage" ? (
        <Link href={href} className="z-[2] text-[#d4d4d4]" onClick={onClick}>
          <span
            className={cn(
              "flex border-none bg-[url(/images/main-page/button.png)] bg-center bg-no-repeat cursor-pointer justify-center",
              "items-center text-[#141414] font-bold transition-all bg-contain px-4 opacity-85 hover:opacity-100",
              btn.widthBtnMob,
              btn.heightBtnMob,
              btn.text,
              btn.widthBtn,
              btn.heightBtn
            )}
          >
            {children}
          </span>
        </Link>
      ) : (
        <div className="z-[2] text-[#d4d4d4]">
          <span
            className={cn(
              "flex border-none bg-[url(/images/main-page/button.png)] bg-center bg-no-repeat cursor-pointer justify-center",
              "items-center text-[#141414] font-bold transition-all bg-contain px-4 opacity-85 hover:opacity-100",
              btn.widthBtnMob,
              btn.heightBtnMob,
              btn.text,
              btn.widthBtn,
              btn.heightBtn
            )}
          >
            {children}
          </span>
        </div>
      )}

      <div
        className={cn(
          "absolute top-3 z-[1] rounded-[60px]",
          "shadow-[rgb(5,10,16)_0px_20px_20px] duration-[0.2s] 1250:top-0.5",
          btn.widthShadowMob,
          btn.heightShadowMob,
          btn.widthShadow,
          btn.heightShadow
        )}
      ></div>
    </div>
  );
};
