"use client";
import { ContainerMain } from "@/ui/ContainerMain";
import { FC } from "react";
import { Vitrina } from "../vitrina/Vitrina";
import { useGetProductsQuery } from "@/store/menu-cafe/menu-cafe.api";
import { Aside } from "@/ui/Aside";
import { AsideMenu } from "../menu/AsideMenu";
import useRoutepath from "@/hooks/useRoutepath";
import { useAppSelector } from "@/store/hooks";

export const MenuCafe: FC = () => {
  const { slug } = useRoutepath();
  const { isLoading, isError, data } = useGetProductsQuery(slug);
  const activeCategory = data?.catGoods.filter((i) => i.url === slug);

  const cafeInfo = useAppSelector((state) => state.cafeReducer);
  if (isError) console.log(isError);
  return (
    <main
      className="bg-center bg-repeat-y min-h-[50vh] w-full
                bg-[url(/images/back.jpg)]
                1000:bg-[url(/images/menu-page/background.jpg)] "
    >
      <ContainerMain>
        <div className="flex">
          {data && activeCategory && (
            <>
              <Aside>
                <AsideMenu
                  category={data?.catGoods}
                  isLoading={isLoading}
                  active={activeCategory[0]}
                  className="sticky top-[130px]"
                  page="cafe"
                />
              </Aside>
              <Vitrina
                products={data?.goods}
                isLoading={isLoading}
                title={activeCategory[0].title}
                type="cafe"
                order={cafeInfo}
              />
            </>
          )}
        </div>
      </ContainerMain>
    </main>
  );
};
