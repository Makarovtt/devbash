import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import { FC } from "react";
import { useGetProductsQuery } from "@/store/menu-cafe/menu-cafe.api";
import { AsideMenu } from "../menu/AsideMenu";
import { usePathname } from "next/navigation";
interface Iprops {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const MblMenuFooter: FC<Iprops> = ({ isOpen, className, onClose }) => {
  const router = usePathname();
  const arrSlug = router.split("/");
  const slug = arrSlug[arrSlug.length - 1];
  const { isLoading, isError, data } = useGetProductsQuery(slug);
  const activeCategory = data?.catGoods.filter((i) => i.url === slug);
  if (isError) console.log(isError);

  if (typeof window === "object") {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  if (!isOpen) return null;

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <div
      className={cn(
        "fixed top-0 bg-bgBlock z-[30] transition-all",
        "w-full h-full flex items-center justify-center pb-5 1000:hidden",
        isOpen ? "left-0" : "-left-full",
        className
      )}
    >
      <Button
        isIconOnly
        className="top-3 right-3 fixed"
        onClick={(e) => toggleMenu(e)}
      >
        <X />
      </Button>
      <AsideMenu
        category={data?.catGoods}
        isLoading={isLoading}
        active={activeCategory && activeCategory[0]}
        onClose={onClose}
      />
    </div>
  );
};
