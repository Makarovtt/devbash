import { defaultCategoryCafe } from "@/data/menu";
import { GoldButton } from "@/ui/GoldButton";
import { FC } from "react";

export const AboutHistory: FC = () => {
  return (
    <div
      className="rounded-md bg-bgBlock py-[30px] px-[10px]  mx-2
                    flex justify-center items-center flex-col 
                    760:mx-10 700:px-[40px]
                    1000:max-w-[450px] 1000:mx-10 1250:ml-5
                    1250:mx-0"
    >
      <h3 className="text-center text-[30px]">Старый рецепт любимого блюда</h3>
      <p className="my-5 text-[#b7b7b7] leading-8">
        Тандыр – это среднеазиатская керамическая печь, в которой можно готовить
        мясо, рыбу и овощи, а также печь вкусные лепешки и пирожки. Блюда,
        приготовленные в этой печи, отличаются особым вкусом и ароматом. В
        тандыре можно приготовить и такое популярное и пользующееся всеобщей
        любовью блюдо, как шашлык
      </p>
      <GoldButton btnSize="btnPage" href={`/menu-cafe/${defaultCategoryCafe}`}>
        Перейти в меню
      </GoldButton>
    </div>
  );
};
