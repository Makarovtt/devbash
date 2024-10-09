import { cn } from "@/lib/utils";
import { FC } from "react";

interface IProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export const NumberInBlock: FC<IProps> = (props) => {
  return (
    <h2
      className={cn(
        "text-[72px] font-semibold back-text",
        "absolute -bottom-7",
        props.className
      )}
    >
      {props.children}
    </h2>
  );
};
