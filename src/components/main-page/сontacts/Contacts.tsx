import { FC } from "react";
import { Karta } from "./Karta";
import { Card } from "./Card";

export const Contacts: FC = () => {
  return (
    <section className="border border-t-[70px] border-transparent" id="contact">
      <h1>
        Контактная <span>информация</span>
      </h1>
      <div
        className="mt-[50px] flex flex-col items-center gap-10 w-full
                      1000:flex-row 1000:gap-0 1000:justify-between"
      >
        <Karta />
        <Card />
      </div>
    </section>
  );
};
