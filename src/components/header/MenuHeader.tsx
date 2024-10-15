"use client";

import { FC, useEffect, useRef, useState } from "react";
import { BasketHeader } from "./BasketHeader";
import { BaskeMenuFooter } from "./BasketMenuFooter";
import { Menu } from "./Menu";
import { ContainerMain } from "@/ui/ContainerMain";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { ITypeMenu } from "@/interfaces/menu-cafe.interface";

export const MenuHeader: FC = () => {
  // const constBody = useRef<HTMLElement>();
  const pathname = usePathname();
  const typeMenu = useRef<ITypeMenu>("");
  if (pathname.split("/")[1] === "menu-cafe") {
    typeMenu.current = "cafe";
  } else if (pathname.split("/")[1] === "menu-delivery") {
    typeMenu.current = "delivery";
  } else {
    typeMenu.current = "";
  }
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return (
    <>
      <div
        className="bg-[#19191f] sticky top-0 w-full z-10
                      shadow-[0px_7px_10px_1px_rgba(0,0,0,0.2)]"
      >
        <ContainerMain className="relative">
          <Menu className="hidden 1000:flex" />
          <BasketHeader className="hidden 1000:block absolute top-0 right-0" />
        </ContainerMain>
      </div>
      {typeMenu &&
        mounted &&
        createPortal(
          <BaskeMenuFooter typeMenu={typeMenu.current} />,
          document.body
        )}
    </>
  );
};
