"use client";
import { ContainerMain } from "@/ui/ContainerMain";
import { FC, useMemo } from "react";
import { Vitrina } from "../vitrina/Vitrina";
import { useGetProductsQuery } from "@/store/menu-cafe/menu-cafe.api";
import { Aside } from "@/ui/Aside";
import { AsideMenu } from "../menu/AsideMenu";
import useRoutepath from "@/hooks/useRoutepath";
import { useAppSelector } from "@/store/hooks";

export const MenuDelivery: FC = () => {
  const { slug } = useRoutepath();
  const { isLoading, isError, data } = useGetProductsQuery(slug);
  const activeCategory = data?.catGoods.filter((i) => i.url === slug);
  if (isError) console.log(isError);

  const deliveryInfo = useAppSelector((state) => state.deliveryReducer);
  const newData = useMemo(() => {
    return data?.goods.filter((item) => item.delivery === "1");
  }, [data?.goods]);

  const newDataCat = useMemo(() => {
    return data?.catGoods.filter((item) => {
      return data?.allItems.find((iitem) => iitem.category === item.id);
    });
  }, [data?.catGoods, data?.allItems]);

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
                  category={newDataCat}
                  isLoading={isLoading}
                  active={activeCategory[0]}
                  className="sticky top-[130px]"
                />
              </Aside>
              <Vitrina
                products={newData}
                isLoading={isLoading}
                title={activeCategory[0].title}
                type="delivery"
                order={deliveryInfo}
              />
            </>
          )}
        </div>
      </ContainerMain>
    </main>
  );
};
