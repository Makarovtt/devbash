import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};
export const ContainerMain: FC<Props> = (props) => {
  return (
    <div
      className={cn(
        "max-w-maxWidth w-full mx-auto px-1 400:px-[15px]",
        "760:w-full 760:px-[10px]",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
