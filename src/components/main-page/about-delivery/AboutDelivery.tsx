import { FC } from "react";
import { Task1 } from "./Task1";
import { Task2 } from "./Task2";
import { Task3 } from "./Task3";
import { Task4 } from "./Task4";
import { Task5 } from "./Task5";

export const AboutDelivery: FC = () => {
  return (
    <section>
      <h1>
        Как заказать <span>доставку на дом</span>
      </h1>
      <div className="block justify-between items-start mt-[50px] 760:flex">
        <div className="w-full 760:w-[calc(50%_-_15px)] 1250:w-auto">
          <Task1 />
          <Task2 />
        </div>
        <div className="w-full 760:w-[calc(50%_-_15px)] 1250:w-auto">
          <Task3 />
          <Task4 />
        </div>
        <div
          className="hidden rounded-lg bg-bgBlock w-[370px] h-[520px] relative
                        1250:block"
        >
          <Task5 />
        </div>
      </div>
    </section>
  );
};
