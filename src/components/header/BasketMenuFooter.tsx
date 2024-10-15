import { cn } from "@/lib/utils";
import { FC, useEffect, useState } from "react";
import { BasketHeader } from "./BasketHeader";
import { Button } from "@nextui-org/react";
import { createPortal } from "react-dom";
import { MblMenuFooter } from "./MblMenuFooter";
import { MblBasketContainer } from "./MblBasketContainer";
import { ITypeMenu } from "@/interfaces/menu-cafe.interface";

interface IProps {
  className?: string;
  typeMenu?: ITypeMenu;
}
export const BaskeMenuFooter: FC<IProps> = ({
  className,
  typeMenu = "delivery",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <div
      className={cn(
        "flex justify-between items-center px-5 py-3 fixed bottom-0",
        "left-0 right-0 h-32 bg-black z-[22]",
        "1000:hidden",
        className
      )}
    >
      <Button
        radius="full"
        className="px-14 py-6 font-bold bg-white"
        onPress={() => setIsOpen(true)}
      >
        Меню
      </Button>
      <BasketHeader className="block 1000:hidden" />
      {mount &&
        createPortal(
          <MblMenuFooter isOpen={isOpen} onClose={() => setIsOpen(false)} />,
          document.body
        )}
      {mount &&
        createPortal(<MblBasketContainer typeMenu={typeMenu} />, document.body)}
    </div>
  );
};
