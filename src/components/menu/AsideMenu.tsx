import { FC, memo } from "react";
import { ICatGood } from "../../interfaces/menu-cafe.interface";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IProps {
  category: ICatGood[] | undefined;
  isLoading: boolean;
  active: ICatGood | undefined;
  className?: string;
  classNameUl?: string;
  onClose?: () => void;
}

export const AsideMenu: FC<IProps> = memo(function MemoAsideMenu({
  category,
  isLoading,
  active,
  className,
  classNameUl,
  onClose,
}) {
  return (
    <div className={cn("", className)}>
      {isLoading ? (
        <>Загрузка...</>
      ) : (
        <ul className={cn("", classNameUl)}>
          {category &&
            category.map((item) => {
              return (
                <li key={item.id} className="max-w-[250px] ">
                  <Link
                    href={`/menu-cafe/${item.url}`}
                    // href={item.url}
                    onClick={onClose}
                    className={cn(
                      "text-[18px] font-light pl-5 block py-2 z-50 relative",

                      item.url === active?.url
                        ? `bg-[rgb(252,198,92)] text-[rgb(28,32,36)] font-bold
                          clip-path`
                        : "text-[rgb(194,194,194)]"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
});
