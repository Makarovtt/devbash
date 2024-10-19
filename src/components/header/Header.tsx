"use client";

import { ButtonMblMenu } from "@/ui/ButtonMblMenu";
import { FC, useState } from "react";
import { MblMenu } from "./MblMenu";
import { ContainerMain } from "@/ui/ContainerMain";
import { LogotypeHeader } from "./LogotypeHeader";
import { ContactsHeader } from "./ContactsHeader";
import { ModalMenuTop } from "@/ui/modal/ModalMenuTop";

const Header: FC = () => {
  const [isActiveMbl, setIsActiveMbl] = useState<boolean>(false);
  return (
    <>
      <header className="min-h-24 w-full">
        <ButtonMblMenu
          isActiveMbl={isActiveMbl}
          setIsActiveMbl={setIsActiveMbl}
        />

        <ModalMenuTop
          isVisible={isActiveMbl}
          onClose={() => setIsActiveMbl(false)}
        >
          <MblMenu isActiveMbl={isActiveMbl} setIsActiveMbl={setIsActiveMbl} />
        </ModalMenuTop>

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
