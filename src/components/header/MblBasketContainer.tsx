import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import { FC } from "react";

interface IProps {
  className?: string;
  isOpenBasket: boolean;
  setIsOpenBasket: (arg0: boolean) => void;
}

export const MblBasketContainer: FC<IProps> = ({
  isOpenBasket,
  className,
  setIsOpenBasket,
}) => {
  return (
    <div
      className={cn(
        "fixed top-0 bg-bgBlock z-30 transition-all",
        "w-full h-full flex items-center justify-center",
        "1000:max-w-[500px] 1000:shadow-[rgba(6,6,6,0.86)_-13px_0px_21.84px_2.16px]",
        isOpenBasket ? "right-0" : "-right-full",
        className
      )}
    >
      <Button
        isIconOnly
        className="top-3 right-3 absolute"
        onPress={() => setIsOpenBasket(false)}
      >
        <X />
      </Button>
      <h1>MblMenuFooter</h1>
    </div>
  );
};
