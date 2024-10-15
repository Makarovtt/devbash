"use client";

import { ICafeOrder } from "@/interfaces/menu-cafe.interface";
import { cn } from "@/lib/utils";
import { toggleAsideOrder } from "@/store/features/aside-menu-order.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Badge } from "@nextui-org/react";
import { NotebookPen } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FC } from "react";
interface IProps {
  className?: string;
}
export const BasketHeader: FC<IProps> = ({ className }) => {
  const router = usePathname();
  const arrSlug = router.split("/");
  const slug = arrSlug[1];
  const cafeInfo: ICafeOrder[] = useAppSelector((state) => state.cafeReducer);
  const deliveryInfo: ICafeOrder[] = useAppSelector(
    (state) => state.deliveryReducer
  );
  const dispatch = useAppDispatch();
  const openAside = () => {
    dispatch(toggleAsideOrder());
  };
  return (
    <>
      {(slug === "menu-cafe" ||
        slug === "menu-delivery" ||
        slug === "order") && (
        <div
          onClick={openAside}
          className={cn(
            "cursor-pointer index-10",
            className
            // isBasketShow ? "block" : "hidden"
            // animate
          )}
        >
          {slug === "menu-cafe" ? (
            <>
              <Badge
                content={cafeInfo.length}
                size="lg"
                placement="bottom-right"
              >
                <div className="w-14 h-14 rounded-full flex justify-center items-center bg-yellow-500">
                  <NotebookPen color="#22211f" strokeWidth="2" />
                </div>
              </Badge>
            </>
          ) : (
            <div className="w-[60px] h-[60px] relative">
              <Image
                src="/images/header/backet-icon.svg"
                alt="basket"
                width={60}
                height={60}
              />
              <div
                className="w-7 h-7 bg-white text-[#333] rounded-full right-0 -bottom-3 text-small
                            absolute  border-2 border-bgBlock flex items-center justify-center"
              >
                {deliveryInfo.length}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
