import { cn } from "@/lib/utils";
import { FC } from "react";
import { Menu } from "./Menu";
import { ModalMenuTop } from "@/ui/modal/ModalMenuTop";

interface IProps {
  isActiveMbl?: boolean;
  setIsActiveMbl: (arg0: boolean) => void;
}

export const MblMenu: FC<IProps> = ({
  isActiveMbl = false,
  setIsActiveMbl,
}) => {
  if (typeof window === "object") {
    if (isActiveMbl) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  return (
    <ModalMenuTop isVisible={isActiveMbl} onClose={() => setIsActiveMbl(false)}>
      <div
        className={cn(
          "fixed bg-[#0f0f13] w-full h-full top-0 transition-all",
          "flex items-center justify-center flex-col 1000:hidden z-[25]",
          isActiveMbl ? "right-0" : "-right-full"
        )}
      >
        <Menu
          className="1000:hidden"
          align="col"
          setIsActiveMbl={setIsActiveMbl}
        />
      </div>
    </ModalMenuTop>
  );
};
