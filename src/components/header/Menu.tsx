import { menuList } from "@/data/menu";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
interface IProps {
  className?: string;
  align?: "row" | "col";
  setIsActiveMbl?: (arg0: boolean) => void;
}
export const Menu: FC<IProps> = ({
  className = "flex",
  align = "row",
  setIsActiveMbl = () => {},
}) => {
  const pathname = usePathname();
  return (
    <ul
      className={cn(
        "justify-center gap-3 relative",
        className,
        align === "row" ? "flex-row items-center" : "flex-col items-start"
      )}
    >
      {menuList.map((link) => {
        return (
          <li className="mx-[18px]" key={link.id}>
            <Link
              href={link.href}
              onClick={() => setIsActiveMbl(false)}
              className={cn(
                "block font-semibold text-base transition hover:text-[#f7c77e] px-2 py-4",
                `${pathname.split("/")[1]}` === `${link.href.split("/")[1]}`
                  ? "text-[#f7c77e]"
                  : "text-[#d4d4d4]"
              )}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
