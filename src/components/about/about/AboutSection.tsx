import { FC } from "react";
import { AboutLeft } from "./AboutLeft";
import { AboutRight } from "./AboutRight";

export const AboutSection: FC = () => {
  return (
    <section
      className="mt-14 flex-col flex justify-between items-center mb-[100px]
                gap-5
                1000:flex-row 1000:items-end 1000:gap-0"
    >
      <AboutLeft />
      <AboutRight />
    </section>
  );
};
