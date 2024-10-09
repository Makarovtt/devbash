import { FC } from "react";

export const AboutRight: FC = () => {
  return (
    <div
      className="rounded-md bg-bgBlock py-[30px] px-[40px] 760:mx-10
                    flex justify-start items-start flex-col leading-10 max-w-[676px]
                    1000:max-w-[450px] 1000:mx-10 1250:ml-5
                    1250:mx-0"
    >
      <h3 className="w-[300px] text-left text-[30px] italic font-light mb-4">
        <span className="text-gold">Приглашаем всех,</span> кто любит вкусно и
        сытно поесть!
      </h3>
      <p className="my-3 text-[#b7b7b7] leading-6">
        Кафе ... предлагает посетителям вкуснейшие блюда, которые готовятся по
        проверенным рецептам. В нашем меню: сочный свежий вкусный шашлык,
        нежнейшие люля-кебаб, шаурма, закуски, салаты, гарнир, соусы.
      </p>
      <p className="my-3 text-[#b7b7b7] leading-6">
        А чтобы блюдо получилось вкусным, мы подходим к его приготовлению со
        всей душой!
      </p>
      <p className="my-3 text-[#b7b7b7] leading-6">
        Отдельно стоит упомянуть про печь «тандыр», в которой приготовленные
        блюда славятся незаменимым ароматом.
      </p>
      <p className="my-3 text-[#b7b7b7] leading-6">
        Заходите к нам на обед или закажите горячие блюда с доставкой на дом
      </p>
    </div>
  );
};
