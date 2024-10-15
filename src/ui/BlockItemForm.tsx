import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const BlockItemForm: FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={cn("w-full border border-gray-800 rounded-xl p-2", className)}
    >
      {children}
    </div>
  );
};
