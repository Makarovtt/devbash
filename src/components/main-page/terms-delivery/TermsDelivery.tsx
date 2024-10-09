import { FC } from "react";
import { Task1 } from "./Task1";
import { Task2 } from "./Task2";
import Image from "next/image";

export const TermsDelivery: FC = () => {
  return (
    <section
      className="border border-t-[70px] border-transparent"
      id="terms-delivery"
    >
      <h1>
        Условия <span>доставки</span>
      </h1>
      <div className="flex justify-between mt-12">
        <div
          className="w-full flex flex-col justify-between 760:w-[calc(44%_-_15px)]
                        "
        >
          <Task1 />
          <Task2 />
        </div>
        <div
          className="hidden rounded-lg bg-[url(/images/main-page/Courier.png)] 
                    bg-bgBlock h-[520px] relative termsdelivery-rightblock overflow-hidden
                       760:block 1250:overflow-visible"
        >
          <Image
            src="/images/main-page/Courier.png"
            width={645}
            height={659}
            layout="responsive"
            alt=""
            className="absolute top-0 hidden 1250:block"
          />
        </div>
      </div>
    </section>
  );
};
