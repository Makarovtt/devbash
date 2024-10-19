import { FC, memo } from "react";
import { ICatGood } from "../../interfaces/menu-cafe.interface";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IProps {
  category: ICatGood[] | undefined;
  isLoading: boolean;
  active: ICatGood | undefined;
  className?: string;
  onClose?: () => void;
}

export const AsideMenu: FC<IProps> = memo(function MemoAsideMenu({
  category,
  isLoading,
  active,
  className,
  onClose,
}) {
  return (
    <div
      className={cn(
        "h-full w-full flex items-center justify-center",
        className
      )}
    >
      {isLoading ? (
        <>Загрузка...</>
      ) : (
        <ul
          className="max-h-[80%] overflow-y-auto basket--scrollbar w-full mx-2
                        flex flex-col gap-4 border-2 border-gray-900 pr-8"
        >
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
