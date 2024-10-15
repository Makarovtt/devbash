import { usePathname } from "next/navigation";

const useRoutepath = () => {
  const router = usePathname();
  const arrSlug: Array<string> = router.split("/");
  const slug: string = arrSlug[arrSlug.length - 1];
  return slug;
};

export default useRoutepath;
