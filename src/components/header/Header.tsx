"use client";

import { ButtonMblMenu } from "@/ui/ButtonMblMenu";
import { FC, useEffect, useState } from "react";
import { MblMenu } from "./MblMenu";
import { createPortal } from "react-dom";
import { ContainerMain } from "@/ui/ContainerMain";
import { LogotypeHeader } from "./LogotypeHeader";
import { ContactsHeader } from "./ContactsHeader";

const Header: FC = () => {
  // const constBody = useRef<HTMLElement>();
  const [isActiveMbl, setIsActiveMbl] = useState<boolean>(false);
  // constBody.current = document.body;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return (
    <>
      <header className="min-h-24 w-full">
        <ButtonMblMenu
          isActiveMbl={isActiveMbl}
          setIsActiveMbl={setIsActiveMbl}
        />
        {mounted &&
          createPortal(
            <MblMenu
              isActiveMbl={isActiveMbl}
              setIsActiveMbl={setIsActiveMbl}
            />,
            document.body
          )}

        <div className="bg-[#0f0f13] py-[10px] z-10">
          <ContainerMain>
            <div className="flex justify-start items-center">
              <LogotypeHeader />
              <ContactsHeader />
            </div>
          </ContainerMain>
        </div>
      </header>
    </>
  );
};

export default Header;
