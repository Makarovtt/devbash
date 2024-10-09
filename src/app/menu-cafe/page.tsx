import { MenuCafe } from "@/components/menu-cafe/MenuCafe";

const MenuCafePage = ({ params }: { params: { menucafe: string } }) => {
  return <MenuCafe slug={params.menucafe} />;
};

export default MenuCafePage;
