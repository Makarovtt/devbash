import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Aside: FC<IProps> = ({ children, className }) => {
  return (
    <aside
      className={cn(
        "relative py-12 max-w-[270px] min-w-[270px] mr-[30px]",
        "bg-bgBlock hidden 1000:block",
        className
      )}
    >
      {children}
    </aside>
  );
};
